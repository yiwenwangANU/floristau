import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { RecipientFormValues } from "@/libs/types/forms";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

const PlacesAutocomplete = ({
  control,
  setValue: setFormValue,
}: {
  control: Control<RecipientFormValues>;
  setValue: UseFormSetValue<RecipientFormValues>;
}) => {
  const {
    ready,
    value: autoValue,
    setValue: setAutoValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
      componentRestrictions: { country: "au" },
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When the user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleSelect =
    ({ description, place_id }: { description: string; place_id: string }) =>
    async () => {
      // When the user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setAutoValue(description, false);
      clearSuggestions();
      // Geocode → parse → fill other fields
      const results = await getGeocode({ placeId: place_id });
      const parts = parseComponents(results[0].address_components);
      setFormValue("address", parts.addressLine1 || description, {
        shouldValidate: true,
      });
      setFormValue("suburb", parts.suburb, { shouldValidate: true });
      setFormValue("postcode", parts.postcode, { shouldValidate: true });
    };

  const parseComponents = (
    components: google.maps.GeocoderAddressComponent[]
  ) => {
    const get = (type: string) =>
      components.find((c) => c.types.includes(type))?.long_name ?? "";

    // AU-friendly mapping (adjust for your locale)
    const streetNumber = get("street_number");
    const route = get("route");
    const suburb =
      get("locality") || get("postal_town") || get("sublocality") || "";
    const state = get("administrative_area_level_1");
    const postcode = get("postal_code");
    const country = get("country");

    return {
      addressLine1: [streetNumber, route].filter(Boolean).join(" "),
      suburb,
      state,
      postcode,
      country,
    };
  };
  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className="px-5 py-1 hover:bg-gray-300 cursor-pointer"
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <Controller
        name="address"
        control={control}
        rules={{ required: "This field is required" }}
        render={({ field, fieldState }) => {
          return (
            <>
              <input
                {...field}
                value={autoValue ?? ""}
                onChange={(e) => {
                  // keep BOTH in sync
                  setAutoValue(e.target.value);
                  field.onChange(e.target.value);
                }}
                disabled={!ready}
                placeholder="Enter your address"
                className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none w-full"
              />
              {fieldState.error && (
                <span className="mt-2 text-sm text-red-600">
                  {fieldState.error.message}
                </span>
              )}
            </>
          );
        }}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};
export default PlacesAutocomplete;

import usePlacesAutocomplete from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { Control, Controller } from "react-hook-form";
import { RecipientFormValues } from "@/libs/types/forms";

const PlacesAutocomplete = ({
  control,
}: {
  control: Control<RecipientFormValues>;
}) => {
  const {
    ready,
    value: autoValue,
    setValue: setAutoValue,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "YOUR_CALLBACK_NAME",
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
    ({ description }: { description: string }) =>
    () => {
      // When the user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
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
        render={({ field, fieldState }) => (
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
        )}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};
export default PlacesAutocomplete;

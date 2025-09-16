import Button from "@/components/ui/Button";
import { useAppSelector } from "@/redux/hooks";
import { setRecipientMode } from "@/redux/RecipientSlice";
import { updateSender, setSenderMode } from "@/redux/SenderSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

type Inputs = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};
const SenderForm = () => {
  const { firstName, lastName, phone, email } = useAppSelector((s) => {
    return s.sender;
  });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    dispatch(setSenderMode("info"));
    dispatch(updateSender(data));
    dispatch(setRecipientMode("form"));
  };
  return (
    <div className="w-4/5">
      <span className="flex flex-row items-center gap-5">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white">
          1
        </span>
        <span className="text-2xl">Sender Details</span>
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 py-10">
          <label className="text-xl">First Name</label>
          <input
            type="text"
            {...register("firstName", { required: "This field is required" })}
            placeholder="Enter your first name"
            defaultValue={firstName}
            className="w-full rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
          />
          {errors.firstName && (
            <span className="mt-2 text-sm text-red-600">
              {errors.firstName.message}
            </span>
          )}
          <label className="text-xl">Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: "This field is required" })}
            placeholder="Enter your last name"
            defaultValue={lastName}
            className="rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
          />
          {errors.lastName && (
            <span className="mt-2 text-sm text-red-600">
              {errors.lastName.message}
            </span>
          )}
          <label className="text-xl">Phone Number</label>
          <input
            type="text"
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone must be exactly 10 digits",
              },
            })}
            placeholder="Enter your phone number"
            defaultValue={phone}
            className="rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
          />
          {errors.phone && (
            <span className="mt-2 text-sm text-red-600">
              {errors.phone.message}
            </span>
          )}
          <label className="text-xl">Email Address</label>
          <input
            type="text"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email address"
            defaultValue={email}
            className="rounded border-2 border-gray-200 p-5 focus:border-black focus:ring-0 focus:outline-none"
          />
          {errors.email && (
            <span className="mt-2 text-sm text-red-600">
              {errors.email.message}
            </span>
          )}
        </div>

        <Button variant="next" onClick={handleSubmit(onSubmit)}>
          Next
        </Button>
      </form>
    </div>
  );
};
export default SenderForm;

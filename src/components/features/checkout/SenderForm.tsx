import Button from "@/components/ui/Button";
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
  };
  return (
    <div className="w-4/5">
      <span className="flex flex-row gap-5 items-center">
        <span className="text-xl flex items-center justify-center w-12 h-12 text-white bg-black rounded-full">
          1
        </span>
        <span className="text-2xl">Sender Details</span>
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col py-10 gap-3">
          <label className="text-xl">First Name</label>
          <input
            type="text"
            {...register("firstName", { required: "This field is required" })}
            placeholder="Enter your first name"
            className="w-full p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
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
            className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
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
            className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
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
            className="p-5 border-2 border-gray-200 rounded focus:border-black focus:ring-0 focus:outline-none"
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

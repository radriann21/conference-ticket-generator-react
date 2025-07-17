import { useForm } from "react-hook-form";
import { FormValidation } from "../validations/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(FormValidation),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Reset the form after submission
  };

  return (
    <form
      className="w-full flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset>
        <label className="text-neutral-300 font-global">Full Name</label>
        <input
          name="name"
          className="w-full p-2 rounded-md border-1 border-neutral-400 bg-neutral-400/10 text-neutral-50 placeholder:text-neutral-400"
          placeholder="Your name..."
          {...register("name")}
        />
        <span className="text-[10px] font-semibold text-red-500">
          {errors.name?.message}
        </span>
      </fieldset>
      <fieldset>
        <label className="text-neutral-300 font-global">Email Address</label>
        <input
          name="email"
          className="w-full p-2 rounded-md border-1 border-neutral-400 bg-neutral-400/10 text-neutral-50 placeholder:text-neutral-400"
          type="email"
          placeholder="Your email..."
          {...register("email")}
        />
        <span className="text-[10px] font-semibold text-red-500">
          {errors.email?.message}
        </span>
      </fieldset>
      <fieldset>
        <label className="text-neutral-300 font-global">Github Username</label>
        <input
          name="github"
          className="w-full p-2 rounded-md border-1 border-neutral-400 bg-neutral-400/10 text-neutral-50 placeholder:text-neutral-400"
          type="text"
          placeholder="@yourusername"
          {...register("github")}
        />
        <span className="text-[10px] font-semibold text-red-500">
          {errors.github?.message}
        </span>
      </fieldset>
      <button className="w-full font-global font-bold rounded-md p-2 text-neutral-900 bg-orange-600 transition-colors duration-300 cursor-pointer hover:bg-orange-500">
        Generate My Ticket
      </button>
    </form>
  );
};

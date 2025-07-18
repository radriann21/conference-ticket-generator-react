import { useForm } from "react-hook-form";
import { FormValidation } from "../validations/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { LucideBadgeInfo, LucideCloudUpload } from "lucide-react";

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
        <span className="text-neutral-100 font-global">Upload Avatar</span>
        <label
          htmlFor="avatar"
          className="flex flex-col items-center justify-center h-48 border-2 border-neutral-300 transition-colors duration-300 hover:border-neutral-500 border-dashed rounded-lg cursor-pointer mt-2"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="py-2 px-4 rounded-md border-2 mb-2 bg-purple-100/10 border-neutral-50/10">
              <LucideCloudUpload className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-neutral-400 font-global">
              Drag and drop or click to upload!
            </span>
          </div>
          <input
            id="avatar"
            name="avatar"
            type="file"
            className="hidden"
            accept=".jpg, .png"
          />
        </label>
        <span className="mt-2 text-[10px] font-semibold text-neutral-400">
          <LucideBadgeInfo className="inline mr-2" />
          Upload your photo (JPG or PNG, max size: 500KB).
        </span>
      </fieldset>
      <fieldset>
        <label className="text-neutral-100 font-global">Full Name</label>
        <input
          name="name"
          autoComplete="off"
          className="w-full p-2 rounded-md border-1 border-neutral-400 bg-neutral-400/10 text-neutral-50 placeholder:text-neutral-400"
          placeholder="Your name..."
          {...register("name")}
        />
        <span className="text-[10px] font-semibold text-red-500">
          {errors.name?.message}
        </span>
      </fieldset>
      <fieldset>
        <label className="text-neutral-100 font-global">Email Address</label>
        <input
          name="email"
          className="w-full p-2 rounded-md border-1 border-neutral-400 bg-neutral-400/10 text-neutral-50 placeholder:text-neutral-400"
          type="email"
          autoComplete="off"
          placeholder="Your email..."
          {...register("email")}
        />
        <span className="text-[10px] font-semibold text-red-500">
          {errors.email?.message}
        </span>
      </fieldset>
      <fieldset>
        <label className="text-neutral-100 font-global">Github Username</label>
        <input
          name="github"
          className="w-full p-2 rounded-md border-1 border-neutral-400 bg-neutral-400/10 text-neutral-50 placeholder:text-neutral-400"
          type="text"
          autoComplete="off"
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

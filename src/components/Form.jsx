import { useForm } from "react-hook-form";
import { FormValidation } from "../validations/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { LucideBadgeInfo, LucideCloudUpload } from "lucide-react";
import { useState, useEffect } from "react";
import { useTicketContext } from "../context/TicketContext.jsx";

export const Form = () => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarName, setAvatarName] = useState("");
  const [avatarError, setAvatarError] = useState("");

  const { setTicketData } = useTicketContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(FormValidation),
  });

  const avatarField = watch("avatar");

  useEffect(() => {
    if (avatarField && avatarField.length > 0) {
      const file = avatarField[0];

      if (!file) {
        setAvatarPreview(null);
        setAvatarName("");
        setAvatarError("");
        return;
      }

      if (file.size > 500 * 1024) {
        setAvatarPreview(null);
        setAvatarName("");
        setAvatarError("File size exceeds 500KB.");
        setValue("avatar", null);
        return;
      }
      if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
        setAvatarPreview(null);
        setAvatarName("");
        setAvatarError("Unsupported file format.");
        setValue("avatar", null);
        return;
      }

      setAvatarName(file.name);
      setAvatarError("");
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setAvatarPreview(null);
      setAvatarName("");
      setAvatarError("");
    }
  }, [avatarField, setValue]);

  const onSubmit = (data) => {
    const avatarFile = data.avatar?.[0];

    setTicketData({
      ...data,
      avatarFile,
      avatarPreview,
    });
    reset();
    setAvatarPreview(null);
    setAvatarName("");
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
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="preview"
                className="mt-2 w-20 h-20 object-cover rounded-md"
              />
            )}
            {avatarName && (
              <span className="mt-1 text-sm text-red-500">{avatarName}</span>
            )}
          </div>
          {!avatarPreview && !avatarName && (
            <>
              <div className="py-2 px-4 rounded-md border-2 mb-2 bg-purple-100/10 border-neutral-50/10">
                <LucideCloudUpload className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-neutral-400 font-global">
                Drag and drop or click to upload!
              </span>
            </>
          )}
          <input
            {...register("avatar")}
            id="avatar"
            name="avatar"
            type="file"
            className="hidden"
            accept=".jpg, .png, .jpeg"
          />
        </label>
        <span
          className={`mt-2 text-[10px] font-semibold ${
            errors.avatar?.message || avatarError
              ? "text-red-500"
              : "text-neutral-400"
          }`}
        >
          <LucideBadgeInfo className="inline mr-2" />
          {errors.avatar?.message || avatarError
            ? errors.avatar?.message || avatarError
            : "Max file size is 500KB. Accepted formats: JPG, PNG, JPEG."}
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

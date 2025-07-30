import * as Yup from "yup";

export const FormValidation = Yup.object({
  name: Yup.string().required("Name is required."),
  email: Yup.string().email("Invalid email.").required("Email is required."),
  github: Yup.string().required("GitHub username is required."),
  avatar: Yup.mixed()
    .test("required", "Avatar is required.", value => value && value.length > 0)
    .test("fileSize", "File size exceeds 500KB.", value =>
      !value || !value.length ? true : value[0].size <= 500 * 1024
    )
    .test("fileType", "Unsupported file format.", value =>
      !value || !value.length
        ? true
        : ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
    ),
});

import * as Yup from 'yup';

export const FormValidation = Yup.object({
  name: Yup.string().required("Name is required.").min(2, "Name must be at least 2 characters long."),
  email: Yup.string().email("Invalid email format.").required("Email is required."),
  github: Yup.string().required("GitHub username is required.").min(2, "GitHub username must be at least 2 characters long."),
})

import * as yup from "yup";

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
});
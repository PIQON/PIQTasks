import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup
    .string()
    .required("Email is required!")
    .email("Email must be valid!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(6, "Password must have minimum 6 characters"),
  passwordConfirm: yup
    .string()
    .required("Password confirm is required!")
    .min(6, "Password must have minimum 6 characters")
    .oneOf([yup.ref("password")], "Password must be the same!"),
});

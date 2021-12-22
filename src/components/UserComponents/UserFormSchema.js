import * as yup from "yup";

export const userSignUpSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username Required")
    .min(2, "Username must be at least 2 characters"),
  email: yup.string().trim().required("Email Required"),
  password: yup
    .string()
    .trim()
    .required("Password Required")
    .min(2, "Password must be at least 2 characters"),
});

export const userLoginSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username Required")
    .min(2, "Username must be at least 2 characters"),
  password: yup
    .string()
    .trim()
    .required("Password Required")
    .min(2, "Password must be at least 2 characters"),
});

import * as yup from "yup";

export const instructorSignUpSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username Required")
    .min(2, "Username must be at least 2 characters"),
  email: yup.string().trim().required("Email Required"),
  instructorCode: yup.string().trim().required("Instructor Code Required"),
  password: yup
    .string()
    .trim()
    .required("Password Required")
    .min(2, "Password must be at least 2 characters"),
});

export const instructorLoginSchema = yup.object().shape({
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

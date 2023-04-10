import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().required("Please enter your email"),
  password: yup.string().min(8).required("Please enter your password"),
});

export type ILogin = yup.InferType<typeof LoginSchema>;

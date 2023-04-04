import * as yup from "yup";

export const UserSignUpSchema = yup.object({
  first_name: yup.string().required("Please Enter Your First Name"),
  last_name: yup.string().required("Please Enter Your Last Name"),
  email: yup.string().required("Please Enter Your Email"),
  password: yup.string().min(8).required("Please Enter Your Password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords didn't match")
    .required("Please Enter Your Password Again"),
});

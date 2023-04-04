import { object, string } from "prop-types";
import * as yup from "yup";

export const ShopkeeperSchema = yup.object({
  first_name: yup.string().required("Please Enter Your First Name"),
  last_name: yup.string().required("Please Enter Your Last Name"),
  email: yup.string().required("Please Enter Your Email"),
  password: yup.string().min(8).required("Please Enter Your Password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords didn't match")
    .required("Please Enter Your Password Again"),
});

export type IShopkeeper = yup.InferType<typeof ShopkeeperSchema>;

export const ProductSchema = yup.object({
  productName: yup.string().required("Please enter product name"),
  description: yup.string().required("Please enter description"),
  quantity: yup.number().required("Please enter quantity"),
});

export type IProduct = yup.InferType<typeof ProductSchema>;

import { object, string } from "prop-types";
import * as yup from "yup";

export const ShopkeeperSchema = yup.object({
  firstName: yup.string().required("Please Enter Your First Name"),
  lastName: yup.string().required("Please Enter Your Last Name"),
  email: yup.string().required("Please Enter Your Email"),
  password: yup.string().min(8).required("Please Enter Your Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords didn't match")
    .required("Please Enter Your Password Again"),
  shopName: yup.string().required("Please Enter Shop Name"),
  shopDescription: yup.string().required("Please Enter Shop Description"),
  shopImageUrl: yup.string().required("Please Enter Shop Image Url"),
});

export type IShopkeeper = yup.InferType<typeof ShopkeeperSchema>;

export const ProductSchema = yup.object({
  productName: yup.string().required("Please enter product name"),
  description: yup.string().required("Please enter description"),
  quantity: yup.number().required("Please enter quantity"),
  shopkeeperId: yup.number(),
});

export type IProduct = yup.InferType<typeof ProductSchema>;

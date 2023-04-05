import { object, string } from "prop-types";
import * as yup from "yup";

export const ShopkeeperSchema = yup.object({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup.string().required("Please enter your email"),
  password: yup.string().min(8).required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords didn't match")
    .required("Please enter your password again"),
  shopName: yup.string().required("Please enter shop Name"),
  shopDescription: yup.string().required("Please enter shop description"),
  shopImageUrl: yup.string().required("Please enter shop image url"),
});

export type IShopkeeper = yup.InferType<typeof ShopkeeperSchema>;

export const ProductSchema = yup.object({
  productName: yup.string().required("Please enter product name"),
  description: yup.string().required("Please enter description"),
  quantity: yup.number().required("Please enter quantity"),
  shopkeeperId: yup.number(),
  productImageUrl: yup.string().required("Please enter image url"),
});

export type IProduct = yup.InferType<typeof ProductSchema>;

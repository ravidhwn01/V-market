import { IProduct } from "../schemas/shopkeeper.schema";
import { axiosInstance } from "./api.instance";

export const addProduct = async (product: IProduct) => {
  const addedProductResponse = await axiosInstance.post("product", product);
  console.log(addedProductResponse.data);
  return addedProductResponse.data;
};

export const getAllProduct = async (shopId: string) => {
  const products = await axiosInstance.get(`product/shopkeeper/${shopId}`);
  console.log(products.data);
  return products.data;
};

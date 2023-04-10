import { Product } from "../interfaces/shop.interface";
import { IProduct } from "../schemas/shopkeeper.schema";
import { axiosInstance } from "./api.instance";

export const addProduct = async (product: IProduct) => {
  const addedProductResponse = await axiosInstance.post("product", product);
  console.log(addedProductResponse.data);
  return addedProductResponse.data;
};

export const getAllProducts = async () => {
  const products = await axiosInstance.get(`product/shopkeeper`);
  console.log(products.data);
  return products.data;
};

export const getAllProductsForShop = async (shopkeeperId: number) => {
  const products = await axiosInstance.get(
    `product/shopkeeper/${shopkeeperId}`
  );
  return products.data;
};

export const updateProductsShopkeeperId = async (
  productId: number,
  shopkeeperId: number
): Promise<Product> => {
  console.log(shopkeeperId);
  const updatedProductResponse = await axiosInstance.patch(
    `product/${productId}`,
    shopkeeperId
  );
  console.log(updatedProductResponse.data);
  return updatedProductResponse.data;
};

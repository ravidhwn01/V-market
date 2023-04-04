import { IShopkeeper } from "../schemas/shopkeeper.schema";
import { axiosInstance } from "./api.instance";

export const addShopkeeper = async (shopkeeper: IShopkeeper) => {
  const response = await axiosInstance.post("/shopkeeper", shopkeeper);
  console.log(response.data);
  return response.data;
};

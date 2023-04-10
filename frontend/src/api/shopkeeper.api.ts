import { IShopkeeper } from "../schemas/shopkeeper.schema";
import { axiosInstance } from "./api.instance";

export const addShopkeeper = async (shopkeeper: IShopkeeper) => {
  const response = await axiosInstance.post("/shopkeeper", shopkeeper);
  console.log(response.data);
  return response.data;
};

export const getShopkeeper = async () => {
  const shopkeeper = await axiosInstance.get("/shopkeeper");
  console.log(shopkeeper.data);
  return shopkeeper.data;
};

export async function getUserByToken() {
  const user = await axiosInstance.get("/shopkeeper/me");
  return user.data;
}

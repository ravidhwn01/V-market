import { ILoginUser } from "../interfaces/loginDetails.interface";
import { axiosInstance } from "./api.instance";

export const loginShopkeeperRequest = async (loginDetails: ILoginUser) => {
  const loggedInShopkeeperResponse = await axiosInstance.post(
    "login",
    loginDetails
  );
  console.log(loggedInShopkeeperResponse.data);
  return loggedInShopkeeperResponse.data;
};

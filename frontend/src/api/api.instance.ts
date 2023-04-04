import axios from "axios";

//do not want to repeat url
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

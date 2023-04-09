import axios from "axios";

//do not want to repeat url
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});

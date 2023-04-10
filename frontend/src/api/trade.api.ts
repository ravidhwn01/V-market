import { IExportedProduct } from "../interfaces/exportedProduct.interface";
import { axiosInstance } from "./api.instance";

export const addProductsToExport = async (exportProduct: any) => {
  const exportedProduct = await axiosInstance.post("trade", exportProduct);
  console.log(exportedProduct.data);

  return exportedProduct.data;
};

export const getAllExportedProducts = async () => {
  const getExportedProduct = await axiosInstance.get(`trade`);
  console.log(getExportedProduct.data);

  return getExportedProduct.data;
};

export const importProduct = async (tradeId: number) => {
  const exportedProduct = await axiosInstance.post("trade/import", {
    tradeId,
  });
  console.log(exportedProduct.data, "imported product");

  return exportedProduct.data;
};

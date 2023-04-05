import { Product } from "./shop.interface";

export interface IExportedProduct {
  id: number;
  productId: number;
  exportedShopkeeperId: number;
  importedShopkeeper: boolean;
  createdAt: Date;
  updatedAt: Date;
  product: Product;
  shopkeeper: Shopkeeper;
}

// export interface Product {
//   id: number;
//   shopkeeperId: number;
//   productName: string;
//   quantity: number;
//   description: string;
//   productImageUrl: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface Shopkeeper {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  shopName: string;
  shopDescription: string;
  shopImageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

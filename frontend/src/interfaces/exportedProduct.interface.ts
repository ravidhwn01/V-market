import { Product } from "./shop.interface";

export interface IExportedProduct {
  id: number;
  productId: number;
  exportedShopkeeperId: number;
  importedShopkeeperId: number;
  createdAt: Date;
  updatedAt: Date;
  product: Product;
  shopkeeper: Shopkeeper;
}

export interface Shopkeeper extends ShopkeeperContextValue {
  password: string;
  confirmPassword: string;
}

export interface ShopkeeperContextValue {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  shopName: string;
  shopDescription: string;
  shopImageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

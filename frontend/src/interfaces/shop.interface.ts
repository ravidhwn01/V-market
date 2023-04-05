export interface IShopWithProduct {
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
  products: Product[];
}

export interface Product {
  id: number;
  shopkeeperId: number;
  productName: string;
  quantity: number;
  description: string;
  productImageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

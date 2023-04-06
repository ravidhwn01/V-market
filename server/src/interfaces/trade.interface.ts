export interface ITrade {
  id: number;
  productId: number;
  exportedShopkeeperId: number;
  importedShopkeeperId: number;
  tradestatus: boolean;
  updatedAt: string;
  createdAt: string;
}

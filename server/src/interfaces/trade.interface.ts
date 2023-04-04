export interface ITrade {
  id: number;
  productId: number;
  exportedBy: number;
  importedBy: number;
  quantity: number;
  updatedAt: string;
  createdAt: string;
}

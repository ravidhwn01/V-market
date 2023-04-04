import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class TradeSchema extends Model {
  @Column
  productId: number;

  @Column
  exportedBy: number;

  @Column
  importedBy: number;

  @Column
  quantity: number;
}

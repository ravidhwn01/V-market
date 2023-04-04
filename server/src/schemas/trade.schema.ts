import { Column, Model, Table } from 'sequelize-typescript';
import { ITrade } from 'src/interfaces/trade.interface';

@Table
export class TradeSchema extends Model<ITrade> {
  @Column
  productId: number;

  @Column
  exportedBy: number;

  @Column
  importedBy: number;

  @Column
  quantity: number;
}

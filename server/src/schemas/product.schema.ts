import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class PorductSchema extends Model {
  @Column
  shopkeeperId: number;

  @Column
  productName: string;

  @Column
  quantity: number;

  @Column
  description: string;
}

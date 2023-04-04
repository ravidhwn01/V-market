import { Column, Model, Table } from 'sequelize-typescript';
import { IProduct } from 'src/interfaces/product.interface';

@Table
export class ProductSchema extends Model<IProduct> {
  @Column
  shopkeeperId: number;

  @Column
  productName: string;

  @Column
  quantity: number;

  @Column
  description: string;
}

import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { IProduct } from 'src/interfaces/product.interface';
import { ShopkeeperSchema } from './shopkeeper.schema';

@Table
export class ProductSchema extends Model<IProduct> {
  @ForeignKey(() => ShopkeeperSchema)
  @Column
  shopkeeperId: number;

  @Column
  productName: string;

  @Column
  quantity: number;

  @Column
  description: string;
}

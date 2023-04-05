import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { IProduct } from 'src/interfaces/product.interface';
import { ShopkeeperSchema } from './shopkeeper.schema';
import { Shopkeeper } from 'src/modules/shopkeeper/entities/shopkeeper.entity';

@Table
export class ProductSchema extends Model<IProduct> {
  @ForeignKey(() => ShopkeeperSchema)
  @Column
  shopkeeperId: number;

  @BelongsTo(() => ShopkeeperSchema)
  shopkeeper: Shopkeeper;

  @Column
  productName: string;

  @Column
  quantity: number;

  @Column
  description: string;

  @Column
  productImageUrl: string;
}

import {
  BelongsTo,
  Column,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { ITrade } from 'src/interfaces/trade.interface';
import { ProductSchema } from './product.schema';
import { Product } from 'src/modules/product/entities/product.entity';
import { ShopkeeperSchema } from './shopkeeper.schema';
import { Shopkeeper } from 'src/modules/shopkeeper/entities/shopkeeper.entity';

@Table
export class TradeSchema extends Model<ITrade> {
  @ForeignKey(() => ProductSchema)
  @Column
  productId: number;

  @BelongsTo(() => ProductSchema)
  product: Product;

  @ForeignKey(() => ShopkeeperSchema)
  @Column
  exportedShopkeeperId: number;

  @BelongsTo(() => ShopkeeperSchema)
  shopkeeper: Shopkeeper;

  @Column
  importedShopkeeper: boolean;
}

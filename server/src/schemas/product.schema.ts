import {
  BelongsTo,
  Column,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { IProduct } from 'src/interfaces/product.interface';
import { ShopkeeperSchema } from './shopkeeper.schema';
import { Shopkeeper } from 'src/modules/shopkeeper/entities/shopkeeper.entity';
import { TradeSchema } from './trade.schema';
import { Trade } from 'src/modules/trade/entities/trade.entity';

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

  @HasOne(() => TradeSchema)
  trade: Trade;
}

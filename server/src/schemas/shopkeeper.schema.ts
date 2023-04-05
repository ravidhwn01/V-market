import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { IShopkeeper } from 'src/interfaces/shopkeeper.interface';
import { ProductSchema } from './product.schema';
import { Product } from 'src/modules/product/entities/product.entity';

@Table
// Model is a   base class which provide  properties build-in sequelize to create a table
export class ShopkeeperSchema extends Model<IShopkeeper> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  confirmPassword: string;

  @Column
  shopName: string;

  @Column
  shopDescription: string;

  @Column
  shopImageUrl: string;

  @HasMany(() => ProductSchema)
  products: Product[];
}

import { Column, Model, Table } from 'sequelize-typescript';
import { IShopkeeper } from 'src/interfaces/shopkeeper.interface';

@Table
export class ShopkeeperSchema extends Model<IShopkeeper> {
  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  confirm_password: string;
}

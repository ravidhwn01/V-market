import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductSchema } from 'src/schemas/product.schema';
import { ShopkeeperSchema } from 'src/schemas/shopkeeper.schema';
import { TradeSchema } from 'src/schemas/trade.schema';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      password: 'postgres',
      username: 'postgres',
      port: 5002,
      models: [ShopkeeperSchema, ProductSchema, TradeSchema],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}

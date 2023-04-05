import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductSchema } from 'src/schemas/product.schema';
import { ShopkeeperSchema } from 'src/schemas/shopkeeper.schema';
// The @Module() decorator is used to define a module in NestJS, which is a way to organize code into cohesive units
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
      // Finally, the autoLoadModels property is set to true, which tells the SequelizeModule to automatically load all models defined in the models array.
      sync: { force: true },
    }),
  ],
})
export class DatabaseModule {}

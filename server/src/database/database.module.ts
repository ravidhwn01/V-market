import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShopkeeperSchema } from 'src/schemas/shopkeeper.schema';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      password: 'postgres',
      username: 'postgres',
      port: 5002,
      models: [ShopkeeperSchema],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}

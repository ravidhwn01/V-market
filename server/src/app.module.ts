import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopkeeperModule } from './modules/shopkeeper/shopkeeper.module';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './modules/product/product.module';
import { TradeModule } from './modules/trade/trade.module';

@Module({
  imports: [ShopkeeperModule, DatabaseModule, ProductModule, TradeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

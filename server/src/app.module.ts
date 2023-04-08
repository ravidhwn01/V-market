import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './modules/product/product.module';
import { ShopkeeperModule } from './modules/shopkeeper/shopkeeper.module';
import { ShopkeeperService } from './modules/shopkeeper/shopkeeper.service';
import { TradeModule } from './modules/trade/trade.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ShopkeeperModule, DatabaseModule, ProductModule, TradeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, ShopkeeperService],
})
export class AppModule {}

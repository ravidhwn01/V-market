import { Module } from '@nestjs/common';
import { ProductModule } from '../product/product.module';
import { TradeController } from './trade.controller';
import { TradeService } from './trade.service';

@Module({
  controllers: [TradeController],
  providers: [TradeService],
  imports: [ProductModule],
})
export class TradeModule {}

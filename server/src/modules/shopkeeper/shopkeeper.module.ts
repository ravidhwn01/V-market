import { Module } from '@nestjs/common';
import { ShopkeeperController } from './shopkeeper.controller';
import { ShopkeeperService } from './shopkeeper.service';

@Module({
  imports: [],
  controllers: [ShopkeeperController],
  providers: [ShopkeeperService],
  exports: [ShopkeeperService, ShopkeeperModule],
})
export class ShopkeeperModule {}

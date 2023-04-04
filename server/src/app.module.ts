import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopkeeperModule } from './modules/shopkeeper/shopkeeper.module';

@Module({
  imports: [ShopkeeperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

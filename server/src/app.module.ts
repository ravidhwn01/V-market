import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopkeeperModule } from './modules/shopkeeper/shopkeeper.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ShopkeeperModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

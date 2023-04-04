import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateShopkeeperDto } from './dto/create-shopkeeper.dto';
import { UpdateShopkeeperDto } from './dto/update-shopkeeper.dto';
import { ShopkeeperService } from './shopkeeper.service';

@Controller('shopkeeper')
export class ShopkeeperController {
  //
  constructor(private shopkeeperService: ShopkeeperService) {}

  @Post()
  create(@Body() createShopkeeperDto: CreateShopkeeperDto) {
    return this.shopkeeperService.create(createShopkeeperDto);
  }

  @Get()
  findAll() {
    return this.shopkeeperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopkeeperService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShopkeeperDto: UpdateShopkeeperDto,
  ) {
    return this.shopkeeperService.update(+id, updateShopkeeperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopkeeperService.remove(+id);
  }
}

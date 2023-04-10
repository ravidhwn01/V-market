import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateShopkeeperDto } from './dto/create-shopkeeper.dto';
import { UpdateShopkeeperDto } from './dto/update-shopkeeper.dto';
import { ShopkeeperService } from './shopkeeper.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('shopkeeper')
export class ShopkeeperController {
  //
  constructor(private shopkeeperService: ShopkeeperService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getUserDataUsingToken(@Request() req) {
    return req.user;
  }
  @Post()
  create(@Body() createShopkeeperDto: CreateShopkeeperDto) {
    return this.shopkeeperService.create(createShopkeeperDto);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.shopkeeperService.getAllWithProducts();
  }

  @Get(':email')
  findOneWithEmail(@Param('email') email: string) {
    return this.shopkeeperService.findOneWithUserEmail(email);
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

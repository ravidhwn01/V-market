import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req, @Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.productService.getAllWithShopKeeper();
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/shopkeeper')
  getAllForShopKeeper(@Request() req) {
    return this.productService.getAllForShopKeeper(+req.user.id);
  }

  @Get('/shopkeeper/:id')
  getAllForOtherShopkeeper(@Param('id') id) {
    return this.productService.getAllForShopKeeper(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTradeDto } from './dto/create-trade.dto';
import { UpdateTradeDto } from './dto/update-trade.dto';
import { Repository, Sequelize } from 'sequelize-typescript';
import { TradeSchema } from 'src/schemas/trade.schema';
import { ProductSchema } from 'src/schemas/product.schema';
import { ShopkeeperSchema } from 'src/schemas/shopkeeper.schema';
import { ProductService } from '../product/product.service';
import { UpdateProductDto } from '../product/dto/update-product.dto';
@Injectable()
export class TradeService {
  private repository: Repository<TradeSchema>;
  constructor(
    private sequelize: Sequelize,
    private productService: ProductService,
  ) {
    this.repository = this.sequelize.getRepository(TradeSchema);
  }
  create(createTradeDto: CreateTradeDto) {
    return this.repository.create(createTradeDto);
  }

  findAll() {
    return this.repository.findAll();
  }
  getProductWithTrade() {
    return this.repository.findAll({
      include: [ProductSchema, ShopkeeperSchema],
    });
  }
  async importedTrade(createTradeDto) {
    console.log(createTradeDto);
    const importedProductData = await this.repository.findOne({
      where: {
        id: createTradeDto.tradeId,
      },
    });
    console.log(importedProductData.dataValues);
    const tradedProduct = await this.productService.update(
      importedProductData.productId,
      {
        shopkeeperId: createTradeDto.shopkeeperId,
      },
    );
    console.log(tradedProduct);

    this.update(importedProductData.id, {
      importedShopkeeperId: createTradeDto.shopkeeperId,
      tradestatus: true,
    });
    // this.remove(importedProductData.id);
  }
  findOne(id: number) {
    return this.repository.findOne({
      where: { id },
    });
  }

  update(id: number, updateTradeDto: UpdateTradeDto) {
    return this.repository.update(updateTradeDto, {
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.repository.destroy({
      where: {
        id,
      },
    });
  }
}

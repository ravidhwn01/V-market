import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { IImportTradeData } from 'src/interfaces/importTrade.interface';
import { ProductSchema } from 'src/schemas/product.schema';
import { ShopkeeperSchema } from 'src/schemas/shopkeeper.schema';
import { TradeSchema } from 'src/schemas/trade.schema';
import { ProductService } from '../product/product.service';
import { CreateTradeDto } from './dto/create-trade.dto';
import { UpdateTradeDto } from './dto/update-trade.dto';
import { Op } from 'sequelize';
@Injectable()
export class TradeService {
  private repository: Repository<TradeSchema>;
  constructor(
    private sequelize: Sequelize,
    private productService: ProductService,
  ) {
    this.repository = this.sequelize.getRepository(TradeSchema);
  }
  create(createTradeDto: CreateTradeDto, shopId) {
    return this.repository.create({
      ...createTradeDto,
      exportedShopkeeperId: shopId,
    });
  }

  findAll() {
    return this.repository.findAll();
  }
  getProductWithTrade(shopkeeperId: number) {
    return this.repository.findAll({
      include: [ProductSchema, ShopkeeperSchema],
      where: {
        exportedShopkeeperId: { [Op.ne]: shopkeeperId },
        tradestatus: false,
      },
    });
  }
  async importedTrade(importTradeData: IImportTradeData, shopkeeperId: number) {
    const importedProductData = await this.repository.findOne({
      where: {
        id: importTradeData.tradeId,
      },
    });
    console.log(importedProductData.dataValues);
    const tradedProduct = await this.productService.update(
      importedProductData.productId,
      {
        shopkeeperId: shopkeeperId,
      },
    );
    console.log(tradedProduct);

    this.update(importedProductData.id, {
      importedShopkeeperId: shopkeeperId,
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

import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository, Sequelize } from 'sequelize-typescript';
import { ProductSchema } from 'src/schemas/product.schema';
import { ShopkeeperSchema } from 'src/schemas/shopkeeper.schema';

@Injectable()
export class ProductService {
  private repository: Repository<ProductSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(ProductSchema);
  }

  create(createProductDto: CreateProductDto, userId: number) {
    return this.repository.create({
      shopkeeperId: userId,
      ...createProductDto,
    });
  }

  findAll() {
    return this.repository.findAll();
  }

  getAllWithShopKeeper() {
    return this.repository.findAll({
      include: [ShopkeeperSchema],
    });
  }

  getAllForShopKeeper(shopkeeperId: number) {
    return this.repository.findAll({
      where: {
        shopkeeperId: shopkeeperId,
      },
      order: [['id', 'DESC']],
    });
  }

  public async findOne(id: number) {
    return await this.repository.findOne({
      where: { id },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.repository.update(updateProductDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.repository.destroy({
      where: { id },
    });
  }
}

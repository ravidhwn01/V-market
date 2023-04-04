import { Injectable } from '@nestjs/common';
import { CreateShopkeeperDto } from './dto/create-shopkeeper.dto';
import { UpdateShopkeeperDto } from './dto/update-shopkeeper.dto';
import { Repository, Sequelize } from 'sequelize-typescript';
import { ShopkeeperSchema } from 'src/schemas/shopkeeper.schema';
import { ProductSchema } from 'src/schemas/product.schema';

@Injectable()
export class ShopkeeperService {
  private repository: Repository<ShopkeeperSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(ShopkeeperSchema);
  }

  create(createShopkeeperDto: CreateShopkeeperDto) {
    return this.repository.create(createShopkeeperDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  getAllWithProducts() {
    return this.repository.findAll({
      include: [ProductSchema],
    });
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateShopkeeperDto: UpdateShopkeeperDto) {
    return this.repository.update(updateShopkeeperDto, {
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

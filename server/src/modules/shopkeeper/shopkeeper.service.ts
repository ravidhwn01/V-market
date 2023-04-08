import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateShopkeeperDto } from './dto/create-shopkeeper.dto';
import { UpdateShopkeeperDto } from './dto/update-shopkeeper.dto';
import { Repository, Sequelize } from 'sequelize-typescript';
import { ShopkeeperSchema } from 'src/schemas/shopkeeper.schema';
import { ProductSchema } from 'src/schemas/product.schema';
import { IShopkeeper } from 'src/interfaces/shopkeeper.interface';
import { encryptPassword } from 'src/utils/bcrypt';

@Injectable()
export class ShopkeeperService {
  //  the repository object can be used to access and modify data for the ShopkeeperSchema model.
  // The repository object will be of type Repository with a generic type of ShopkeeperSchema, which is used to store data for the ShopkeeperSchema model.
  private repository: Repository<ShopkeeperSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(ShopkeeperSchema);
  }
  // In the constructor function, a private member named sequelize is accepted as a parameter. sequelize is an instance of the Sequelize class, which provides the ability to connect to the database.
  async create(createShopkeeperDto: CreateShopkeeperDto) {
    const password = await encryptPassword(createShopkeeperDto.password);
    console.log(password);

    return this.repository.create({
      ...createShopkeeperDto,
      password,
    });
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
  async findOneWithUserEmail(email: string) {
    const shopkeeper = this.repository.findOne({
      where: { email },
    });
    if (shopkeeper) {
      return (await shopkeeper).dataValues;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
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

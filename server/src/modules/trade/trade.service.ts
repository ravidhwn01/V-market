import { Injectable } from '@nestjs/common';
import { CreateTradeDto } from './dto/create-trade.dto';
import { UpdateTradeDto } from './dto/update-trade.dto';
import { Repository, Sequelize } from 'sequelize-typescript';
import { TradeSchema } from 'src/schemas/trade.schema';

@Injectable()
export class TradeService {
  private repository: Repository<TradeSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(TradeSchema);
  }
  create(createTradeDto: CreateTradeDto) {
    return this.repository.create(createTradeDto);
  }

  findAll() {
    return this.repository.findAll();
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

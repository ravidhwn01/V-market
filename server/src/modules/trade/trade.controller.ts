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
import { TradeService } from './trade.service';
import { CreateTradeDto } from './dto/create-trade.dto';
import { UpdateTradeDto } from './dto/update-trade.dto';
import { IImportTradeData } from 'src/interfaces/importTrade.interface';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('trade')
export class TradeController {
  constructor(private readonly tradeService: TradeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() request, @Body() createTradeDto: CreateTradeDto) {
    console.log({ createTradeDto });
    return this.tradeService.create(createTradeDto, request.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    return this.tradeService.getProductWithTrade(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('import')
  addExportedProduct(
    @Request() req,
    @Body() importedProduct: IImportTradeData,
  ) {
    return this.tradeService.importedTrade(importedProduct, req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tradeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTradeDto: UpdateTradeDto) {
    return this.tradeService.update(+id, updateTradeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tradeService.remove(+id);
  }
}

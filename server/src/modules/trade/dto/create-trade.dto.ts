import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTradeDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  exportedShopkeeperId: number;

  @IsNumber()
  importedShopkeeperId: number;
}

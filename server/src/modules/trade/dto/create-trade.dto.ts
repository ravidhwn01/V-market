import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTradeDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @IsNotEmpty()
  exportedShopkeeperId: number;

  @IsNumber()
  importedShopkeeperId: number;

  @IsBoolean()
  tradestatus: boolean;
}

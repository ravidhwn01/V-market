import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTradeDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @IsNotEmpty()
  exportedShopkeeperId: number;

  @IsNumber()
  importedShopkeeper: boolean;
}

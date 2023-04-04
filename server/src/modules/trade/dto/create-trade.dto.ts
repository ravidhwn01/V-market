import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTradeDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  exportedBy: number;

  @IsNumber()
  importedBy: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

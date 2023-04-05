import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ShopkeeperService } from '../shopkeeper/shopkeeper.service';

@Injectable()
export class AuthService {
  // constructor(private shopKeeperService: ShopkeeperService) {}

  // async singIn(email: string, pass: string) {
  //   const user = await this.shopKeeperService.findOne(email as any);
  //   if (user.password !== pass) {
  //     throw new UnauthorizedException();
  //   }
  //   const { password, ...result } = user;
  //   return result;
  // }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

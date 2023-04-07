import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ShopkeeperService } from '../shopkeeper/shopkeeper.service';
import { IShopkeeper } from 'src/interfaces/shopkeeper.interface';
import { CreateShopkeeperDto } from '../shopkeeper/dto/create-shopkeeper.dto';

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
  constructor(
    private shopkeeperService: ShopkeeperService,
    private jwtTokenService: JwtService,
  ) {
    super();
  }

  async validateUserCredentials(email: string, password: string): Promise<any> {
    const user = await this.shopkeeperService.findOneWithUserName(email);
    console.log(user);
    if (user && user.password === password) {
      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }

  async loginWithCredentials(user: IShopkeeper) {
    const payload = { email: user.email, id: user.id };
    console.log(payload);

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}

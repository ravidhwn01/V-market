import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ShopkeeperService } from '../shopkeeper/shopkeeper.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly shopkeeperService: ShopkeeperService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    console.log('inside the validate');
    const user = await this.shopkeeperService.findOneWithUserEmail(email);
    console.log(user, 'user found');
    if (user === undefined) {
      console.log('user undefined');
      throw new UnauthorizedException();
    }
    if (user !== undefined && user.password == password) {
      console.log('this is user', user.dataValues);
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}

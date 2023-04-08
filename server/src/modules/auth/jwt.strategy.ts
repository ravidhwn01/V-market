import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IShopkeeper } from 'src/interfaces/shopkeeper.interface';
import { Shopkeeper } from '../shopkeeper/entities/shopkeeper.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'thisIsSecretKey',
    });
  }

  validate(payload: any): any {
    console.log('payload undefined');
    return payload;
  }
}

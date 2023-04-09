import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Shopkeeper } from '../shopkeeper/entities/shopkeeper.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateToken(payload: any): any {
    console.log('payload  ', payload.dataValues);
    return this.jwtService.sign(payload);
  }
}

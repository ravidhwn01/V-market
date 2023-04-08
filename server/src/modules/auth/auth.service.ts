import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Shopkeeper } from '../shopkeeper/entities/shopkeeper.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateToken(payload: Shopkeeper): string {
    console.log('payload undefined ');
    return this.jwtService.sign(payload);
  }
}

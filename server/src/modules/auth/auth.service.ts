import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ShopkeeperService } from '../shopkeeper/shopkeeper.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly shopkeeperService: ShopkeeperService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.shopkeeperService.findOneWithUserEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(email: string, password: string) {
    const user = await this.shopkeeperService.repository
      .findOne({
        where: { email, password },
      })
      .then((data) => data.dataValues);

    const { password: _, confirmPassword, ...userToTokenize } = user;

    return {
      access_token: this.jwtService.sign(userToTokenize),
    };
  }
}

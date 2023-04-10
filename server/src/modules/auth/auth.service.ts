import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ShopkeeperService } from '../shopkeeper/shopkeeper.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly shopkeeperService: ShopkeeperService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.shopkeeperService.findOneWithUserEmail(email);
    if (user) {
      const matchPassword = comparePassword(pass, user.password);
      if (matchPassword) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
  }

  async login(email: string, password: string) {
    console.log({ email, password });
    const user = await this.shopkeeperService.repository
      .findOne({
        where: { email },
      })
      .then((data) => data?.dataValues);
    if (user) {
      const matchPassword = comparePassword(password, user.password);
      if (matchPassword) {
        const { password: _, confirmPassword, ...userToTokenize } = user;

        return {
          access_token: this.jwtService.sign(userToTokenize),
          user: userToTokenize,
        };
      }
    }
    throw new NotFoundException(
      'User does not exist for the following login credentials',
    );
  }
}

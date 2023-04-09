import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ShopkeeperModule } from '../shopkeeper/shopkeeper.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from 'src/constants/constance';

@Module({
  imports: [
    PassportModule,
    ShopkeeperModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '10h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthModule, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}

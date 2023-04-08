import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ShopkeeperModule } from '../shopkeeper/shopkeeper.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    ShopkeeperModule,
    JwtModule.register({
      secret: 'thisIsSecretKey',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthModule, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}

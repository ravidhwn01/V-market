import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './modules/auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  login(@Request() req) {
    console.log('login controller');
    // authentication complete
    // next authorize
    // id card jwt token
    return req.user;
    // return this.authService.generateToken(req.user);
  }
}

import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './modules/auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() loginDto: any) {
    // authentication complete
    // next authorize
    // id card jwt token
    // return req.user;
    return this.authService.login(loginDto.email, loginDto.password);
  }
}

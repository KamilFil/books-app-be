import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserObj } from '../decorators/user-obj.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() req: LoginUserDto, @Res() res: Response): Promise<any> {
    return this.authService.login(req, res);
  }
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async user(@UserObj() user: User, @Res() res: Response) {
    return this.authService.user(user, res);
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  async logout(@UserObj() user: User, @Res() res: Response) {
    return this.authService.logout(user, res);
  }
}

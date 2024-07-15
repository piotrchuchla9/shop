import {
  Controller,
  Post,
  Body,
  UseGuards,
  UnauthorizedException,
  Res,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { LoginDto } from '@/app/auth/dto/login.dto';
import { JwtAuthGuard } from '@/app/auth/jwt-auth.guard';
import { TokenStorageService } from '@/app/auth/token-storage.service';
import { Request, Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) response: Response) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { access_token, refresh_token } = await this.authService.login(user);
    
    response.cookie('access_token', access_token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    response.cookie('refresh_token', refresh_token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    
    return { message: 'Login successful' };
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'User logout' })
  @ApiResponse({ status: 200, description: 'Successfully logged out' })
  async logout(@Req() req: Request, @Res({ passthrough: true }) response: Response) {
    const token = req.cookies['access_token'];
    this.tokenStorageService.invalidateToken(token);
    
    response.clearCookie('access_token');
    response.clearCookie('refresh_token');
    
    return { message: 'Successfully logged out' };
  }
}
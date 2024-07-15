import { AuthController } from '@/app/auth/auth.controller';
import { AuthService } from '@/app/auth/auth.service';
import { JwtStrategy } from '@/app/auth/jwt.strategy';
import { TokenStorageService } from '@/app/auth/token-storage.service';
import { UserService } from '@/app/user/user.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your_jwt_secret',
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [AuthService, JwtStrategy, UserService, PrismaService, TokenStorageService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
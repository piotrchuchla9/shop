import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthModule } from '@/app/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
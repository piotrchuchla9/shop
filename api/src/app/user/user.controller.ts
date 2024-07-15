import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User } from '@prisma/client';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from '@/app/user/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
}
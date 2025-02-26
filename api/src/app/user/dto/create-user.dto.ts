import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  email!: string;

  @ApiProperty()
  firstName!: string;

  @ApiProperty()
  lastName!: string;

  @ApiProperty()
  password!: string;

  @ApiProperty({ enum: ['ADMIN', 'CUSTOMER'], default: 'CUSTOMER' })
  role!: 'ADMIN' | 'CUSTOMER';
}

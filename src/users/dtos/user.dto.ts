import { IsString, IsEmail } from 'class-validator';

export class UserDto {
  @IsString()
  name: string;
  @IsString()
  @IsEmail()
  email: string;
}

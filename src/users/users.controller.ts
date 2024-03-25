import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UserCreateDto } from '../dto/user-create-dto';
import { UsersService } from './users.service';
import { UserInterface } from '../interfaces/user-interface';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('api/v1/users/create')
  createUser(@Body() dto: UserCreateDto): UserInterface {
    return this.usersService.createUser(dto);
  }

  @Get('api/v1/users/getAll')
  getAllUsers(): UserInterface[] {
    return this.usersService.getAllUsers();
  }

  @Get('api/v1/users/getByParams')
  getUserByParams(@Body() params: Partial<UserCreateDto>) {
    return this.usersService.getUserByParams(params);
  }

  @Get('api/v1/users/getById/:id')
  getUserById(@Param('id') id: string): UserInterface {
    return this.usersService.getUserById(id);
  }

  @Put('api/v1/user/update/:id')
  updateUserById(
    @Param('id') id: string,
    @Body() dto: Partial<UserCreateDto>,
  ): UserInterface {
    return this.usersService.updateUserById(id, dto);
  }

  @Delete('api/v1/users/delete/:id')
  deleteUserById(@Param('id') id: string): void {
    this.usersService.deleteUserById(id);
  }
}

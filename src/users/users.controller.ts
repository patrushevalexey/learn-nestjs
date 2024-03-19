import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './user.interface';
import { CreateUserDto } from './user.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  createUser(@Body() dto: CreateUserDto): UserInterface {
    return this.usersService.createUser(dto);
  }

  @Get('getAllUsers')
  getAllUsers(): UserInterface[] {
    return this.usersService.getAllUsers();
  }

  @Get('getUser/accountNumber/:accountNumber')
  getUserByAccountNumber(
    @Param('accountNumber', ParseIntPipe) accountNumber: number,
  ) {
    return this.usersService.getUserByAccountNumber(accountNumber);
  }

  @Put('changeAccountBalance/:accountNumber/newBalance/:balance')
  changeAccountBalance(
    @Param('accountNumber', ParseIntPipe) accountNumber: number,
    @Param('balance', ParseIntPipe) balance: number,
  ) {
    return this.usersService.changeAccountBalance(accountNumber, balance);
  }

  @Delete('deleteUser/:accountNumber')
  deleteUser(
    @Param('accountNumber', ParseIntPipe) accountNumber: number,
  ): void {
    this.usersService.deleteUser(accountNumber);
  }
}

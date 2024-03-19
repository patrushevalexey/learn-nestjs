import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserInterface } from './user.interface';

@Injectable()
export class UsersService {
  private users: UserInterface[] = [];
  private count: number = 0;
  private accountNumber: number = 4080700000;

  public createUser(dto: CreateUserDto): UserInterface {
    const user: UserInterface = {
      id: ++this.count,
      accountNumber: ++this.accountNumber,
      ...dto,
    };

    this.users.push(user);
    return user;
  }

  public getAllUsers(): Array<UserInterface> {
    return this.users;
  }

  public getUserByAccountNumber(accountNumber: number): UserInterface {
    const foundedUser: UserInterface = this.users.find(
      (user: UserInterface) => user.accountNumber === accountNumber,
    );
    return foundedUser;
  }

  public changeAccountBalance(
    accountNumber: number,
    balance: number,
  ): UserInterface {
    const user = this.users.find(
      (user: UserInterface) => user.accountNumber === accountNumber,
    );
    user.balance = balance;
    return user;
  }

  public deleteUser(accountNumber: number): void {
    const user: UserInterface = this.users.find(
      (user) => user.accountNumber === accountNumber,
    );
    if (user) {
      this.users.splice(this.users.indexOf(user), 1);
    } else {
      throw new Error('User not found');
    }
  }
}

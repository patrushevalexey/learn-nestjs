import { BadRequestException, Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UserInterface } from '../interfaces/user-interface';
import { UserCreateDto } from '../dto/user-create-dto';

@Injectable()
export class UsersService {
  users: UserInterface[] = [];

  createUser(dto: UserCreateDto): UserInterface {
    const newUser: UserInterface = {
      id: uuidv4(),
      ...dto,
    };
    this.users.push(newUser);
    return newUser;
  }

  getAllUsers(): UserInterface[] {
    return this.users;
  }

  getUserByParams(params: Partial<UserCreateDto>): UserInterface {
    return this.users.find(
      (user: UserInterface) =>
        (typeof params.name == 'string' ? params.name === user.name : true) &&
        (typeof params.email == 'string' ? params.email === user.email : true) &&
        (typeof params.phone == 'string' ? params.phone === user.phone : true) &&
        (typeof params.age == 'number' ? params.age === user.age : true),
    );
  }

  getUserById(id: string): UserInterface {
    return this.users.find((user) => user.id === id);
  }

  updateUserById(id: string, dto: Partial<UserCreateDto>): UserInterface {
    const user: UserInterface = this.getUserById(id);
    const index: number = this.users.indexOf(user);
    this.users[index] = {
      ...user,
      ...dto,
    };
    return this.users[index];
  }

  deleteUserById(id: string): void {
    const user: UserInterface = this.getUserById(id);
    if (!user) throw new BadRequestException('User not found');
    this.users.splice(this.users.indexOf(user), 1);
  }
}

import { UserInterface } from '../interfaces/user-interface';

export class UserCreateDto implements Omit<UserInterface, 'id'> {
  name: string;
  email: string;
  phone: string;
  age: number;
}

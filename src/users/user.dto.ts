import { UserInterface } from './user.interface';

export class CreateUserDto
  implements Omit<UserInterface, 'id' | 'accountNumber'>
{
  phone: string;
  currency: string;
  balance: number;
}

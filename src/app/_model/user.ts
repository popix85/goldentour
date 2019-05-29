import {Role} from './role';

export class User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  active: string;
  token: string;
  address: string;
  city: string;
  birtday: Date;
  birthplace: string;
  cap: number;
  role: Role;

  constructor() {
    this.id = 0;
  }

  isOperator(): boolean {
    if (this.role.name === 'Tour_Operator') {
      return true;
    }
    return false;
  }
}


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
  birthday: Date;
  birthplace: string;
  cap: number;
  role: string;

  constructor() {
    this.id = 0;
  }

  public isOperator(): boolean {
    if (this.role === 'TourOperator') {
      return true;
    }
    return false;
  }
}

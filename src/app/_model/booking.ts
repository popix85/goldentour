import {User} from './user';
import {Transport} from './transport';
import {Accomodation} from './accomodation';
import {Destination} from './destination';

export class Booking {
  id: number;
  descriptio: string;
  personNumber: number;
  startDate: Date;
  endDate: Date;
  price: number;
  user: User;
  transport: Transport;
  accomodatoion: Accomodation;
  destination: Destination;
  tourOperator: User;
}

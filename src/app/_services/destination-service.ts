import {BaseApiServiceService} from './base-api-service.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Accomodation} from '../_model/accomodation';

@Injectable()
export class DestinationService extends BaseApiServiceService {
  accomodation: Accomodation[];
  constructor(private http: HttpClient) {
    super();
  }

  getDestination() {
    const url = this.buildRemoteRestUrl('booking/to/showAllDestination');
    return this.http.get(url);
  }

  getAccomodation(id: number) {
    const url = this.buildRemoteRestUrl('booking/to/showAccomodatio/' + id);
    return this.http.get(url);
  }
}

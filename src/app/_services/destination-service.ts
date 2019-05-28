import {BaseApiServiceService} from './base-api-service.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DestinationService extends BaseApiServiceService {

  constructor(private http: HttpClient) {
    super();
  }

  getDestination() {
    const url = this.buildRemoteRestUrl('booking/to/showAllDestination');
    return this.http.get(url);
  }
}

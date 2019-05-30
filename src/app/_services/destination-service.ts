import {BaseApiServiceService} from './base-api-service.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Accomodation} from '../_model/accomodation';
import {Transport} from '../_model/transport';
import {Data} from '../_utils/data';
import index from '@angular/cli/lib/cli';


@Injectable()
export class DestinationService extends BaseApiServiceService {

    accomodation: Accomodation[];
    transports: Transport[];
  private idx: number;

    constructor(private http: HttpClient) {
      super();
      this.accomodation = new Array<Accomodation>();
      this.transports = Data.TRANSPORTS;
    }
    getDestination() {
        const url = this.buildRemoteRestUrl('booking/to/showAllDestination');
        return this.http.get(url);
    }

    getAccomodation(id: number) {
        const url = this.buildRemoteRestUrl('booking/to/showAccomodation/' + id);
        return this.http.get(url);
    }
  getTranportByType(Type: string): Transport[] {
   /** let selected: Transport[];
    selected = new Array<Transport>();
    this.transports.forEach(
      transport => {
        if (transport.vehicle === Type) {
          selected[this.idx] =  transport;
        }
      }, this.idx
    );
    return selected;*/
   return this.transports;
  }

}

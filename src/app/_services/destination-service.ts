import {BaseApiServiceService} from './base-api-service.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Accomodation} from '../_model/accomodation';
import {Trasport} from '../_model/trasport';
import {Data} from '../_utils/Data';

@Injectable()
export class DestinationService extends BaseApiServiceService {

    accomodation: Accomodation[];
    transports: Trasport[];
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

    getTranportByType(Type: string): Trasport[] {
        let selected: Trasport[];
        selected = new Array<Trasport>();
        this.transports.forEach(
            transport => {
                if (transport.vehicle === Type) {
                    selected.push(transport);
                }
            }, this.idx
        );
        return selected;
    }
}

import {Injectable} from '@angular/core';
import {BaseApiServiceService} from './base-api-service.service';
import {HttpClient} from '@angular/common/http';
import {Booking} from '../_model/booking';

@Injectable()
export class BookingService extends BaseApiServiceService {

    constructor(private http: HttpClient) {
        super();
    }

    bookingList(id: number) {
        const url = this.buildRemoteRestUrl('booking/showAllBooking/' + id);
        return this.http.get(url);
    }

    getBooking(id: number) {
        const url = this.buildRemoteRestUrl('booking/to/showBooking/' + id);
        return this.http.get(url);
    }

    updateBooking(booking: Booking) {
        const url = this.buildRemoteRestUrl('booking/to/update/' + booking.id);
        return this.http.put(url, booking);
    }

}

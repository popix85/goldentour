import {Component, OnInit} from '@angular/core';
import {Booking} from '../_model/booking';
import {BookingService} from '../_services/booking.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-booking-detail',
    templateUrl: './booking-detail.component.html',
    styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

    booking: Booking;

    constructor(private route: ActivatedRoute, private bookingService: BookingService) {
        this.booking = new Booking();
    }

    ngOnInit() {
        this.route.params.subscribe(
            (params) => {
                this.bookingService.getBooking(+params.id).subscribe(
                    res => {
                        this.booking = (res as Booking);
                    }
                );
            }
        );
    }

    editBooking(id: number) {
        this.bookingService.updateBooking(this.booking).subscribe(
            res => {
                this.booking = (res as Booking);
            }
        );
    }
}

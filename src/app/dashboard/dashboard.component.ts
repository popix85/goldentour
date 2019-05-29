import {Component, OnInit} from '@angular/core';
import {BookingService} from '../_services/booking.service';
import {AuthService} from '../_services/auth-service.service';
import {Booking} from '../_model/booking';
import {Router} from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    bookingList: Booking[];

    constructor(private bookingService: BookingService, private authService: AuthService, private route: Router) {
        this.bookingList = new Array<Booking>();
    }

    ngOnInit() {
        this.bookingService.bookingList(this.authService.getLoggedUserFromSessionStorage().id).subscribe(
            res => {
                    this.bookingList = ( < Booking[] > res);
            }
        );
    }

    selectBooking(id: number) {
        this.route.navigate(['dashboard', id, 'detail']);
    }
}


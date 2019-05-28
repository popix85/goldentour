import {Component, OnInit} from '@angular/core';
import {Booking} from '../_model/booking';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new.booking.component.html',
  styleUrls: ['./new.booking.component.css']
})
export class NewBookingComponent implements OnInit {
  booking:Booking;
  ngOnInit(): void {
  }
}


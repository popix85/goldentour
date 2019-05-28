import {Component, OnInit} from '@angular/core';
import {Booking} from '../_model/booking';
import {Destination} from '../_model/destination';
import {DestinationService} from '../_services/destination-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new.booking.component.html',
  styleUrls: ['./new.booking.component.css']
})
export class NewBookingComponent implements OnInit {
  destinationData: Destination[];
  constructor(private route: Router, private destinationService: DestinationService) {
  }
  ngOnInit(): void {
    this.destinationService.getDestination().subscribe(
      response => {
        this.destinationData = (response as Destination[]);
      }
    );
  }
}


import {Component, OnInit} from '@angular/core';
import {Booking} from '../_model/booking';
import {Destination} from '../_model/destination';
import {DestinationService} from '../_services/destination-service';
import {Router} from '@angular/router';
import {Accomodation} from '../_model/accomodation';
import {User} from '../_model/user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new.booking.component.html',
  styleUrls: ['./new.booking.component.css']
})
export class NewBookingComponent implements OnInit {
  destinationData: Destination[];
  accomodationData: Accomodation[];
  userData: User[];
  booking: Booking;
  public bookingForm: FormGroup;

  constructor2() {
    this.booking = new Booking();
    this.bookingForm = new FormGroup({
      txtDescription: new FormControl(),
      dateStart: new FormControl(),
      dateEnd: new FormControl(),
      tnxNumberPerson: new FormControl()});
  }
    constructor(private route: Router, private destinationService: DestinationService, ) {
    this.accomodationData = new Array<Accomodation>();
  }
  ngOnInit(): void {
    this.destinationService.getDestination().subscribe(
      response => {
        this.destinationData = (response as Destination[]);
      }
    );
  }
  showAccomodation2(ev: any, id: number) {
    this.destinationService.getAccomodation(id).subscribe(
      response => {
        this.accomodationData = (response as Accomodation[]);
      });
  }
  showAccomodation(ev: any) {
    const id = ev.target.value;
    this.destinationService.getAccomodation(id).subscribe(
      response => {
        this.accomodationData = (response as Accomodation[]);
      });
  }

  findUser(name: string, lastname: string) {

  }
}


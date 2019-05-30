import {Component, OnInit} from '@angular/core';
import {Booking} from '../_model/booking';
import {Destination} from '../_model/destination';
import {DestinationService} from '../_services/destination-service';
import {Router} from '@angular/router';
import {Accomodation} from '../_model/accomodation';
import {User} from '../_model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../_services/user.service';
import {Role} from '../_model/role';
import {BookingService} from '../_services/booking.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new.booking.component.html',
  styleUrls: ['./new.booking.component.css']
})
export class NewBookingComponent implements OnInit {
  destinationData: Destination[];
  accomodationData: Accomodation[];
  user: User;
  role: Role;
booking: Booking;

  constructor(private route: Router, private destinationService: DestinationService,
              private userService: UserService, private bookingService: BookingService) {
    this.accomodationData = new Array<Accomodation>();
    this.user = new User();
    this.role = new Role();
    this.booking = new Booking();
    this.role.id = 1;
    this.role.name = 'User';
  }
  ngOnInit(): void {
    this.destinationService.getDestination().subscribe(
      response => {
        this.destinationData = (response as Destination[]);
      }
    );
  }

  showAccomodation(ev: any) {
    const id = ev.target.value;
    this.booking.destination.destinationId = id;
    this.destinationService.getAccomodation(id).subscribe(
      response => {
        this.accomodationData = (response as Accomodation[]);
      });
  }

  findUser() {
    this.userService.getUserByName('Filippo', 'Verdi').subscribe(
    response => {
      if (response !== undefined) {
        this.user = response[0] as User;
      }});
  }

  adduser() {
    this.user.role = this.role.name;
    this.userService.createUser(this.user).subscribe(
      response => {
        this.user = response as User;
      });
  }

  createBooking(booking: Booking) {
    this.user.role = this.role.name;
    booking.user = this.user;
    this.bookingService.newBooking(booking).subscribe(
      response => {
        this.user = response as User;
      });
  }

  setAccomodation(ev: any) {
    const id = ev.target.value;
    this.booking.accomodatoion.id = id;
  }
}


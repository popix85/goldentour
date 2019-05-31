import {Accomodation} from '../_model/accomodation';
import {User} from '../_model/user';
import {UserService} from '../_services/user.service';
import {Role} from '../_model/role';
import {BookingService} from '../_services/booking.service';
import {Component, OnInit} from '@angular/core';
import {Booking} from '../_model/booking';
import {Destination} from '../_model/destination';
import {DestinationService} from '../_services/destination-service';
import {Router} from '@angular/router';
import {AuthService} from '../_services/auth-service.service';
import {Transport} from '../_model/transport';

@Component({
    selector: 'app-new-booking',
    templateUrl: './new.booking.component.html',
    styleUrls: ['./new.booking.component.css']
})
export class NewBookingComponent implements OnInit {
    destinationData: Destination[];
    accomodationData: Accomodation[];
    user: User;
    currentUser: User;
    role: Role;
    booking: Booking;
    transportData: Transport[];
    transport: Transport;
    constructor(private route: Router, private destinationService: DestinationService,
                private userService: UserService, private bookingService: BookingService, private authService: AuthService) {
        this.accomodationData = new Array<Accomodation>();
        this.user = new User();
        this.role = new Role();
        this.booking = new Booking();
        this.role.id = 1;
        this.role.name = 'User';
        this.transportData =  new Array<Transport>();
        this.transport = new Transport();
    }
    ngOnInit(): void {
        this.destinationService.getDestination().subscribe(
            response => {
                this.destinationData = (response as Destination[]);
            }
        );
        this.currentUser = this.authService.getLoggedUserFromSessionStorage();
    }

    showAccomodation(ev: any) {
        const id = ev.target.value;
        this.booking.destination = id;
        this.destinationService.getAccomodation(id).subscribe(
            response => {
                this.accomodationData = (response as Accomodation[]);
            });
    }

    findUser(user: User) {
        this.userService.getUserByName(user.name, user.lastname).subscribe(
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
        booking.user = this.user.id;
        booking.tourOperator = this.currentUser.id;
        booking.price = 100;
        this.bookingService.newBooking(booking).subscribe(
            response => {
                this.booking = response as Booking;
            });
    }

    setAccomodation(ev: any) {
      this.booking.accomodation = ev.target.value;
    }

  FindTransport() {
      this.transport.dateFrom = this.booking.startDate;
      this.transport.dateTo = this.booking.endDate;
      this.transport.numPosti = this.booking.personNumber;

  }

  setTransportType(ev: any) {
    const type = ev.target.value;
    this.transport.vehicle = type;
    this.transportData = this.destinationService.getTranportByType(type, this.booking.personNumber);
    }

  setTransport(ev: any) {
    this.transport.idTransport = ev.target.value;
  }

  InsertTransport() {
    this.booking.transport = this.transport.idTransport;
  }
}

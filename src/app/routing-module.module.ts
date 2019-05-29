import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './_services/auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewBookingComponent} from './booking/new.booking.component';
import {BookingService} from './_services/booking.service';
import {BookingDetailComponent} from './booking-detail/booking-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'newBooking',
    component: NewBookingComponent,
  },
  {
    path: 'dashboard/:id/detail',
    component: BookingDetailComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true }) // <-- debugging purposes only
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService,
   BookingService
  ],
  declarations: []
})
export class AppRoutingModuleModule { }

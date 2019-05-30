import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './_services/auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookingService} from './_services/booking.service';
import {UserComponent} from './user/user.component';
import {NewBookingComponent} from './booking/new.booking.component';

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
    path: 'user/:id',
    component: UserComponent,
  },
  {
    path: 'booking',
    component: NewBookingComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
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

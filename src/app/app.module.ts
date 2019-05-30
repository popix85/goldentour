import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './_services/user.service';
import {AppRoutingModuleModule} from './routing-module.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AuthService} from './_services/auth-service.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavComponent} from './_nav/nav.component';
import {BookingService} from './_services/booking.service';
import {UserComponent} from './user/user.component';
import {NewBookingComponent} from './booking/new.booking.component';
import {DestinationService} from './_services/destination-service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    NewBookingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    AppRoutingModuleModule,
    HttpClientModule,
  ],
  providers: [UserService, AuthService, BookingService, DestinationService],
  bootstrap: [AppComponent],
})
export class AppModule { }

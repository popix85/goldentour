import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './_services/auth-guard.service';

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
    AuthGuardService
  ],
  declarations: []
})
export class AppRoutingModuleModule { }

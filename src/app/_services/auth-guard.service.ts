import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private autService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.autService.isLoggedUser()) {
      // logged in
      const actualRoute = route.routeConfig.path;
      if (actualRoute === '/') {
        this.router.navigate(['dashboard']);
      }
      return true;
    }
    // not logged in
    console.log('NOT LOGGED IN -----')
    this.router.navigate(['login']);
    return false;
  }
}

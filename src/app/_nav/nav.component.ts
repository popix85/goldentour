import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../_services/auth-service.service';
import {Router} from '@angular/router';
import {User} from '../_model/user';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    currentUser: User;
    adminMenu: boolean;

    @Input('showNavbar') showNavbar: boolean;
        constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.showNavbar = this.authService.isLoggedUser();
        this.currentUser = this.authService.getLoggedUserFromSessionStorage();
        this.adminMenu = this.currentUser.role === 'TourOperator';
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['login', { outlets: { start: 'compose'}}]);
    }

    userDetail(id: number) {
        this.router.navigate(['user', id]);
    }
}

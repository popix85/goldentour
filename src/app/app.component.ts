import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {AuthService} from './_services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to  Golden Tour';

  @Output('notify-login') notifyLogin = new EventEmitter();
  showNavbar: boolean;

  constructor(private authService: AuthService) {
    this.showNavbar = this.authService.isLoggedUser();
  }

  ngOnInit(): void {
  }

  onActivate() {
    this.showNavbar = this.authService.isLoggedUser();
  }

}

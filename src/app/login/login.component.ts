import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../_model/user';
import {AuthService} from '../_services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  constructor(private router: Router, private authService: AuthService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user.username, this.user.password).subscribe(
      res => {
        const auth = res;
        if (auth) {
          this.router.navigate(['dashboard']);
        }
      }
    );
  }
}

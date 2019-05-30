

import {Component, OnInit} from '@angular/core';
import {Booking} from '../_model/booking';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../_services/user.service';
import {User} from '../_model/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

    user: User;
    update: boolean;

    constructor(private route: ActivatedRoute, private userService: UserService){
        this.user = new User();
    }

    ngOnInit(): void {
            this.update = false;

            this.route.params.subscribe(
                (params) => {
                    this.userService.getUserById(+params.id).subscribe(
                        res => {
                            this.user = ( < User > res);
                        }
                    );
                }
            );
    }

    updateUser(user: User) {
        this.userService.updateUser(user).subscribe(
            res => {
                this.user = ( < User > res);
            }
        )
        this.update = true;
    }
}

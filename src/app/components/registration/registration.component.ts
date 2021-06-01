import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  newUser: User = {} as User;
  savedUser: User = {} as User;
  success = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  sendRegistrationRequest(): void{
    this.newUser.role = 'Admin';
    this.userService.sendRegistrationRequest(this.newUser).subscribe(user => {
      this.savedUser = user;
      this.success = true;
    });
  }

}

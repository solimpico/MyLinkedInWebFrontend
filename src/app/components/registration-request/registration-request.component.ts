import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.scss']
})
export class RegistrationRequestComponent implements OnInit {
  registrationRequest: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getRegistrationRequest().subscribe(request => {
      this.registrationRequest = request;
    });
  }

  confirmRegistration(user: User): void{
    this.userService.confirmRegistration(user).subscribe(savedUser => {
      user.registered = savedUser.registered;
      user.enabling = savedUser.enabling;
      this.registrationRequest.splice(this.registrationRequest.indexOf(user), 1);
      location.reload(true);
      });
  }

  deleteRequest(user: User): void{
    this.userService.deleteUser(user).subscribe(() => {
      this.registrationRequest.splice(this.registrationRequest.indexOf(user), 1);
      location.reload(true);
    });
  }

}

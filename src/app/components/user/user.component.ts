import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  allUsers: User[] = [];
  searchInput = '';

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.allUsers = users;
    });
  }

  enableDisableUser(user: User): void{
    this.userService.enableDisableUser(user.id).subscribe(modifiedUser => {
      user.enabling = modifiedUser.enabling;
    });
  }

  moreDetails(user: User): void{
    // tslint:disable-next-line:radix
    const idUser = parseInt(sessionStorage.getItem('idUser') || '0');
    if (user.id === idUser && idUser !== 0){
      this.route.navigateByUrl('profile');
    } else {
      this.route.navigateByUrl('userdetails/' + user.id);
    }

  }

}

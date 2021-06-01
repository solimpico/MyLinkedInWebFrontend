import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {Skil} from '../../model/skil';
import {SkilService} from '../../services/skil.service';
import {ProfileImage} from '../../model/profile-image';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User = {} as User;
  skilList: Skil[] = [];


  constructor(private activateRoute: ActivatedRoute, private userService: UserService, private skilService: SkilService) { }

  ngOnInit(): void {
    let userId: any = 0;
    userId = this.activateRoute.snapshot.paramMap.get('userId');
    // tslint:disable-next-line:radix
    this.userService.findById(parseInt(userId)).subscribe(user => {
      this.user = user;
      if (user.role === 'Applicant'){
        user.skilIdArray?.forEach((idSkil) => {
          this.skilService.getSkilById(idSkil).subscribe(skil => {
            this.skilList.unshift(skil);
          });
        });
      }
    });
  }

}

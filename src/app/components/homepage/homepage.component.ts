import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../model/post';
import {LoginService} from '../../services/login.service';
import {UtilityService} from '../../services/utility.service';
import {InputLogin} from '../../model/input-login';
import {Logintoken} from '../../model/logintoken';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  visiblePosts: Post[] = [];
  inputLog: InputLogin = {} as any;
  loginOutput: Logintoken = {} as Logintoken;
  log = false;
  auth = true;
  admin = true;

  // tslint:disable-next-line:max-line-length
  constructor(private postService: PostService, private loginService: LoginService, private utilityService: UtilityService, private route: Router, private userService: UserService) { }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('idUser', '');
    this.postService.getVisiblePost().subscribe(posts => {
      this.visiblePosts = posts;
      console.log(posts);
    });
  }

  sendCredential(): void{
    this.loginService.sendCredential(this.inputLog).subscribe(tok => {
      if  (tok.token !== null) {
        this.userService.findById(tok.userId).subscribe(user => {
          if (user.role === 'Admin'){
            sessionStorage.setItem('token', tok.token);
            sessionStorage.setItem('idUser', String(tok.userId));
            sessionStorage.setItem('reload', '1');
            this.route.navigateByUrl('adminhome');
          }
          else {
            this.admin = false;
          }
        });
      } else {
        this.auth = false;
      }
     });
  }

}

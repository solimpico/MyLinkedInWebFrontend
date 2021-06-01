import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UtilityService} from '../../services/utility.service';
import {User} from '../../model/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpResponse, HttpResponseBase} from '@angular/common/http';
import {ProfileImage} from '../../model/profile-image';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  constructor(private userService: UserService, private utilityService: UtilityService) {
  }

  // tslint:disable-next-line:radix
  myIdUser: number = parseInt(sessionStorage.getItem('idUser') || '0');
  myUser: User = {} as User;
  newProfileImage: ProfileImage = {} as ProfileImage;
  newDescription = '';
  selectedFile: any;
  newAge = 0;

  ngOnInit(): void {
    this.newProfileImage.id = 0;
    if (this.myIdUser !== 0) {
      this.userService.findById(this.myIdUser).subscribe(user => {
        this.myUser = user;
      });
      this.userService.findProfileImage().subscribe(image => {
        this.newProfileImage = image;
      });
    }
  }

  uploadButton(): void {
    this.utilityService.uploadFile(this.selectedFile).subscribe(data => {
      if (data.url !== '') {
        this.newProfileImage.path = data.url;
        this.userService.addProfileImage(this.newProfileImage).subscribe(image => {
          this.myUser.profileImagePath = image.path;
          this.newProfileImage = image;
          location.reload(true);
        });
      }
    });
  }

  updateDescription(): void {
    this.newProfileImage.description = this.newDescription;
    this.userService.addProfileImage(this.newProfileImage).subscribe(image => {
      this.myUser.profileImagePath = image.path;
      this.newProfileImage = image;
      location.reload(true);
    });
  }


  onFileSelected(event: any): void {
    // validation
    this.selectedFile = event.target.files[0];
    console.log(event);
  }

  updateAge(): void{
    this.userService.updateAge(this.newAge).subscribe(user => {
      this.myUser = user;
      location.reload(true);
    });
  }
}

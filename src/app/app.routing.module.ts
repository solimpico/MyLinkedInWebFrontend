import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {PostComponent} from './components/post/post.component';
import {UserComponent} from './components/user/user.component';
import {RegistrationRequestComponent} from './components/registration-request/registration-request.component';
import {SkilComponent} from './components/skil/skil.component';
import {PostTypeComponent} from './components/post-type/post-type.component';
import {ChatComponent} from './components/chat/chat.component';
import {MyprofileComponent} from './components/myprofile/myprofile.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'adminhome', component: PostComponent},
  {path: 'users', component: UserComponent},
  {path: 'registrationrequest', component: RegistrationRequestComponent},
  {path: 'skil', component: SkilComponent},
  {path: 'posttype', component: PostTypeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'profile', component: MyprofileComponent},
  {path: 'userdetails/:userId', component: UserDetailsComponent}
  // {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

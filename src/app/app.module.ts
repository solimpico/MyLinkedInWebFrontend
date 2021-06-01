import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {LoginService} from './services/login.service';
import { RegistrationRequestComponent } from './components/registration-request/registration-request.component';
import {SkilService} from './services/skil.service';
import { SkilComponent } from './components/skil/skil.component';
import {PostTypeService} from './services/post-type.service';
import { PostTypeComponent } from './components/post-type/post-type.component';
import {ChatService} from './services/chat.service';
import { ChatComponent } from './components/chat/chat.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from './app.routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SearchTypePipe } from './pipes/search-type.pipe';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    UserComponent,
    RegistrationRequestComponent,
    SkilComponent,
    PostTypeComponent,
    ChatComponent,
    SearchPipePipe,
    MyprofileComponent,
    HomepageComponent,
    RegistrationComponent,
    UserDetailsComponent,
    SearchTypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  providers: [UserService, PostService, LoginService, SkilService, PostTypeService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

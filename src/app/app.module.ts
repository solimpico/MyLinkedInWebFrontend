import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {LoginService} from './services/login.service';
import {SkilService} from './services/skil.service';
import {PostTypeService} from './services/post-type.service';
import {ChatService} from './services/chat.service';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from './app.routing.module';
import { SearchTypePipe } from './pipes/search-type.pipe';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchPipePipe,
    HomepageComponent,
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

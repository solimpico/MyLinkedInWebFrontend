import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProfileImage} from '../model/profile-image';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + sessionStorage.getItem('token')});

  publicHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  registrationRequest: User[] = [];

  constructor(private http: HttpClient) { }

  getRegistrationRequest(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/admin/getRegistrationRequest', {headers: this.headers});
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/getAllUsers', { headers: this.headers });
  }

  enableDisableUser(userId: number): Observable<User>{
    return this.http.put<User>('http://localhost:8080/admin/enableDisableUser/' + userId, {}, {headers: this.headers});
  }

  confirmRegistration(user: User): Observable<User>{
    return this.http.put<User>('http://localhost:8080/admin/confirmReg/' + user.id, {}, {headers: this.headers});
  }

  findById(idUser: number): Observable<User>{
    return this.http.get<User>('http://localhost:8080/public/getUserById/' + idUser, {headers: this.publicHeaders});
  }

  deleteUser(user: User): Observable<User>{
    return this.http.delete<User>('http://localhost:8080/admin/deleteRegistrationRequest/' + user.id, {headers: this.headers});
  }

  addProfileImage(profileImage: ProfileImage): Observable<ProfileImage>{
    return this.http.post<ProfileImage>('http://localhost:8080/addProfileImage', profileImage, {headers: this.headers});
  }

  findProfileImage(): Observable<ProfileImage> {
    return this.http.get<ProfileImage>('http://localhost:8080/getProfileImage', {headers: this.headers});
  }

  updateAge(age: number): Observable<User>{
    return this.http.put<User>('http://localhost:8080/updateAge/' + age, {}, {headers: this.headers});
  }

  /*findByName(name: string): User[]{
    return this.allUsers;
  }
  findByNameAndSurname(name: string, surname: string): User[]{
    return this.allUsers;
  }*/

  // DA TOGLIERE PER L'ADMIN
  sendRegistrationRequest(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/public/registrationRequest', user, { headers: this.headers });
  }

}

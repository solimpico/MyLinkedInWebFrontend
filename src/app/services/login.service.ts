import { Injectable } from '@angular/core';
import {UtilityService} from './utility.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InputLogin} from '../model/input-login';
import {Observable} from 'rxjs';
import {Logintoken} from '../model/logintoken';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers = new HttpHeaders({
    'Content-type': 'application/json'
  });

  constructor(private utilityService: UtilityService, private http: HttpClient) { }

  sendCredential(input: InputLogin): Observable<Logintoken> {
    return this.http.post<Logintoken>('http://localhost:8080/public/login', input , {headers: this.headers});
  }
}

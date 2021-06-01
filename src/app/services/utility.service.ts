import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {ProfileImage} from '../model/profile-image';
import {URLFile} from '../model/urlfile';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // @ts-ignore
    headers = new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    Accept: 'application/json',
    responseType: 'text'
  });

  idUser = 0;

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<URLFile> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<URLFile>('http://localhost:8080/upload/', formData, {headers: this.headers});
  }
}


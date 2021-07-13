import { Injectable } from '@angular/core';
import {Skil} from '../model/skil';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkilService {

  headers = new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + sessionStorage.getItem('token')});

  constructor(private http: HttpClient) { }

  getAllSkils(): Observable<Skil[]> {
    return this.http.get<Skil[]>('http://localhost:8080/showAllSkils', { headers: this.headers});
  }

  deleteSkil(skil: Skil): Observable<Skil>{
    return this.http.delete<Skil>('http://localhost:8080/admin/deleteSkil/' + skil.id, {headers: this.headers});
  }

  addSkil(skil: Skil): Observable<Skil>{
    return this.http.post<Skil>('http://localhost:8080/admin/addSkil', skil, {headers: this.headers});
  }

  getSkilById(idSkil: number): Observable<Skil>{
    return this.http.get<Skil>('http://localhost:8080/getSkilById/' + idSkil, {headers: this.headers});
  }
}

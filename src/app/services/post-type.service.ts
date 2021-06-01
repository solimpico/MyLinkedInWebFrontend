import { Injectable } from '@angular/core';
import {PostType} from '../model/post-type';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostTypeService {

  headers = new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + sessionStorage.getItem('token')});

  allPostType: PostType[] = [];

  constructor(private http: HttpClient) { }

  getAllPostType(): Observable<PostType[]> {
    return this.http.get<PostType[]>('http://localhost:8080/showExistingType', {headers: this.headers});
  }

  deleteType(type: PostType): Observable<PostType>{
    return this.http.delete<PostType>('http://localhost:8080/admin/deletePostType/' + type.id, {headers: this.headers});
  }

  addType(type: PostType): Observable<PostType>{
    return this.http.post<PostType>('http://localhost:8080/admin/addType', type, {headers: this.headers});
  }
}

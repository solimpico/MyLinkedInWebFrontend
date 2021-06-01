import { Injectable } from '@angular/core';
import {Post} from '../model/post';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilityService} from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    headers = new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + sessionStorage.getItem('token')});


  constructor(private http: HttpClient, private utilityService: UtilityService) {
  }
  getAllPost(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8080/admin/showAllPost', {headers: this.headers});
  }

  getVisiblePost(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8080/public/showVisible');
  }

  showHidenPost(post: Post): Observable<Post>{
    console.log(sessionStorage.getItem('token'));
    return this.http.put<Post>('http://localhost:8080/admin/hidenShowPost/' + post.id, {} , {headers: this.headers });
  }
}

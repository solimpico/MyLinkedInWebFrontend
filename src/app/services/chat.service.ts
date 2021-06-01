import { Injectable } from '@angular/core';
import {Message} from '../model/message';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  headers = new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + sessionStorage.getItem('token')});

  chats: Message[] = [];

  constructor(private http: HttpClient) { }

  getAllChats(): Observable<Message[]>{
    return this.http.get<Message[]>('http://localhost:8080/showConversation', {headers: this.headers});
  }

  sendMessage(mex: Message): Observable<Message>{
    return this.http.post<Message>('http://localhost:8080/sendMessage', mex, {headers: this.headers});
  }
}

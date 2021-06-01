import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {Message} from '../../model/message';
import {UserService} from '../../services/user.service';
import {UtilityService} from '../../services/utility.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  allChats: Message[] = [];
  conversation: Message[] = [];
  newMessage: Message = {} as Message;
  newConvBool = false;
  // tslint:disable-next-line:radix
  idUser = parseInt(sessionStorage.getItem('idUser') || '0');
  searchInput = '';
  allUsers: User[] = [];

  constructor(private chatService: ChatService, private userService: UserService, private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.chatService.getAllChats().subscribe(conversations => {
      console.log('getAllChat');
      this.allChats = conversations;
    });
    this.userService.getAllUsers().subscribe(users => {
      console.log('getAllUser');
      this.allUsers = users;
    });
  }

  orderMessage(message: Message): Message[]{
    let mes = message;
    this.conversation = [];
    while (mes !== undefined){
      this.conversation.push(mes);
      mes = mes.messageDTOList[0];
    }
    return this.conversation;
  }

  findLastMessage(message: Message): number{
    let idFoglia = 0;
    while (message !== undefined){
      idFoglia = message.id;
      message = message.messageDTOList[0];
    }
    return idFoglia;
  }

  addMessage(parentMessage: Message): void {
    let idReceiver: number;
    let idSender: number;

    if (this.idUser !== 0) {
      if (parentMessage.idSender === this.idUser) {
        idReceiver = parentMessage.idReceiver;
        idSender = parentMessage.idSender;
      } else {
        idReceiver = parentMessage.idSender;
      }
      idSender = parentMessage.idReceiver;

      this.newMessage.idSender = idSender;
      this.newMessage.idReceiver = idReceiver;
      this.newMessage.datetime = new Date();
      this.newMessage.conversationId = this.findLastMessage(parentMessage);
      this.newMessage.messageDTOList = [];
      this.chatService.sendMessage(this.newMessage).subscribe(() => {
      location.reload(true);
    });
  }
  }

  sendNewMessage(): void{
    let control = false;
    let p: Message = {} as Message;
    this.allChats.forEach(chat => {
      if (chat.idSender === this.newMessage.idReceiver || chat.idReceiver === this.newMessage.idReceiver) {
       control = true;
       p = chat;
      }
    });
    if (control){
      this.addMessage(p);
    } else {
      this.newMessage.idSender = this.idUser;
      // l'idReceiver ed il message vengono avvalorati direttamente nell' html
      this.newMessage.conversationId = 0;
      this.newMessage.messageDTOList = [];
      this.chatService.sendMessage(this.newMessage).subscribe(() => {
        location.reload(true);
      });
    }

  }
}

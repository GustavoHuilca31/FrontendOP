import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  faChevronLeft, faChevronRight,
  faFaceSmile,
  faImage,
  faPhone,
  faSearch,
  faUser,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

import {NgOptimizedImage} from "@angular/common";
import {ChatService} from "../../service/chat.service";
import {Message} from "../../models/message-entity/message.entity";
import {FormsModule} from "@angular/forms";
import {Chat} from "../../models/chat-entity/chat.entity";
import {UsersService} from "../../../shared/service/users.service";
import {User} from "../../../shared/model/user.entity";

@Component({
  selector: 'the-chat-section',
  standalone: true,
  imports: [
    FaIconComponent,
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './the-chat-section.component.html',
  styleUrl: './the-chat-section.component.css'
})
export class TheChatSectionComponent implements OnInit{

  protected readonly faChevronLeft = faChevronLeft;
  artistData:any;
  writerData:any;
  messages:any[]= [];
  messageData:any;
  message:string ='';
  currentChatData:Chat = new Chat(0,0,'',0);
  constructor(private userService:UsersService, private chatService:ChatService) { }
  ngOnInit(): void {
    this.getArtist();
    this.getWriter();
    this.getCurrentChat();
  }

  getCurrentChat(){
    this.chatService.getChat(1).subscribe((data:any)=>{
        this.currentChatData = new Chat(data.id, data.chatRoom_id, data.title, data.created_at);
        this.getMessages();
    });
  }


  getArtist(){
    this.userService.getAll().subscribe((data:any)=>{
      data.forEach((user:any)=>{
        if(user.type==='artist' && user.name === 'Miriam Bonastre'){
          this.artistData = new User( user.id,user.name, user.email, user.type,user.subscription_id, user.imgUrl, user.password, user.username);
        }
      });
    });
  }
  getWriter(){
    this.userService.getAll().subscribe((data:any)=>{
      data.forEach((user:any)=>{
        if(user.type==='writer' && user.name === 'Flor Salvador'){
          this.writerData = new User( user.id,user.name, user.email, user.type,user.subscription_id, user.imgUrl, user.password, user.username);
        }
      });
    });
  }

  getMessages(){
    this.chatService.getMessages().subscribe((data:any)=>{
         data.forEach((message:any)=>{
           if(String(message.chat_id) === String(this.currentChatData.getId())){
              this.messageData = new Message(message.id, message.content, message.chat_id, message.isRead, message.isSend);
              this.messages.push(this.messageData);
            }
         });
    });
  }

  sendMessage(){
    this.chatService.sendChatMessage({content: this.message, chat_id: this.currentChatData.getId(), isRead:false,isSend:true }).subscribe((data:any)=>{

    });
  }



  protected readonly faPhone = faPhone;
  protected readonly faVideo = faVideo;
  protected readonly faImage = faImage;
  protected readonly faFaceSmile = faFaceSmile;

  protected readonly faUser = faUser;
  protected readonly faSearch = faSearch;
  protected readonly faChevronRight = faChevronRight;
}

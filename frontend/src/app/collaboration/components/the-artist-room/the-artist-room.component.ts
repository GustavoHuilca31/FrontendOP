import {Component, OnInit} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {ChatService} from "../../service/chat.service";
import {Chatroom} from "../../models/chatRoom-entity/chatroom.entity";
import {NgOptimizedImage} from "@angular/common";
import {UsersService} from "../../../shared/service/users.service";
import {User} from "../../../shared/model/user.entity";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'the-artist-room',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './the-artist-room.component.html',
  styleUrl: './the-artist-room.component.css'
})
export class TheArtistRoomComponent implements OnInit {
   artistData:any;
   writerData:any;
   currentChatRoom:any;

  constructor(private userService:UsersService, private chatService:ChatService) { }
  ngOnInit(): void {
      this.getArtist();
      this.getWriter();
      this.getCurrentChatRoom();
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

  createChat(){
     this.chatService.createChat({ chatRoom_id:1,title:'New Chat',created_date:'2024-05-02'}).subscribe((data:any)=>{});
  }

  getCurrentChatRoom(){
    this.chatService.getChatRoomById('-c711Rr').subscribe((data:any)=>{
      try{
        this.currentChatRoom = new Chatroom(data.id, data.created_date, data.end_date, data.topic, data.active);
      }catch(e){
        console.error('No chat room found');
      }

    });
  }

  deleteRoom(){
    this.chatService.getChatRoomById('-c711Rr').subscribe((data:any)=>{
      try{
        this.currentChatRoom = new Chatroom(data.id, data.created_date, data.end_date, data.topic, data.active);
        this.chatService.deleteChatRoom(this.currentChatRoom.getId()).subscribe((data:any)=>{});
      } catch (e){
        console.error('No chat room found');
      }
    });
  }

}


import {Component, OnInit} from '@angular/core';
import {MainPageCarouselsComponent} from "../main-page-carousels/main-page-carousels.component";
import {BookService} from "../../../service/book.service";
import {Book} from "../../../model/book.entity";
import {UsersService} from "../../../../shared/service/users.service";
import {User} from "../../../../shared/model/user.entity";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-main-page-popular-artist',
  standalone: true,
  imports: [
    MainPageCarouselsComponent,
    RouterLink
  ],
  templateUrl: './the-main-page-popular-artist.component.html',
  styleUrl: './the-main-page-popular-artist.component.css'
})
export class TheMainPagePopularArtistComponent implements OnInit{
  imagesArtists: { url: string, alt: string, name: string }[] = [];

  userData:any;

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.getPopularArtists();
  }

  getPopularArtists() {
    this.usersService.getAll().subscribe((res: any) => {
      if (res){
        res.forEach((user: any) => {
          if (user.type === 'artist') {
            this.userData = new User(
              user.id,
              user.name,
              user.email,
              user.type,
              user.subscription,
              user.imgUrl,
              user.password,
              user.username
            );
            this.imagesArtists.push({url: user.imgUrl, alt: user.name, name: user.name});
          }
        });
      }
    });
  }
}

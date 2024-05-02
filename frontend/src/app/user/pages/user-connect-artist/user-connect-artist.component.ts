import { Component } from '@angular/core';
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {TheUserArtistComponent} from "../../components/the-user-artist/the-user-artist.component";
import {
  TheUserConnectArtistComponent
} from "../../../shared/components/the-user-connect-artist/the-user-connect-artist.component";

@Component({
  selector: 'app-user-connect-artist',
  standalone: true,
  imports: [
    FooterContentComponent,
    NavbarContentComponent,
    TheUserArtistComponent,
    TheUserConnectArtistComponent
  ],
  templateUrl: './user-connect-artist.component.html',
  styleUrl: './user-connect-artist.component.css'
})
export class UserConnectArtistComponent {

}

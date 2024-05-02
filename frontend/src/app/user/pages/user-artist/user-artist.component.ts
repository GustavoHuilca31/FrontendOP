import { Component } from '@angular/core';
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {
    TheUserRecoverPasswordComponent
} from "../../components/the-user-recover-password/the-user-recover-password.component";
import {TheUserArtistComponent} from "../../components/the-user-artist/the-user-artist.component";

@Component({
  selector: 'app-user-artist',
  standalone: true,
  imports: [
    FooterContentComponent,
    NavbarContentComponent,
    TheUserRecoverPasswordComponent,
    TheUserArtistComponent
  ],
  templateUrl: './user-artist.component.html',
  styleUrl: './user-artist.component.css'
})
export class UserArtistComponent {

}

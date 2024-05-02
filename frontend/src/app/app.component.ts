import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarContentComponent} from "./public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {TheUserLoginComponent} from "./user/components/the-user-login/the-user-login.component";
import {TheUserRegisterComponent} from "./user/components/the-user-register/the-user-register.component";
import {
  TheUserRecoverPasswordComponent
} from "./user/components/the-user-recover-password/the-user-recover-password.component";
import {UserArtistComponent} from "./user/pages/user-artist/user-artist.component";
import {TheWriterProfileComponent} from "./user/components/the-writer-profile/the-writer-profile.component";
import {WriterProfileComponent} from "./user/pages/writer-profile/writer-profile.component";
import {
  TheWriterProfileEditComponent
} from "./user/components/the-writer-profile-edit/the-writer-profile-edit.component";
import {IllustratorProfileComponent} from "./user/pages/illustrator-profile/illustrator-profile.component";
import {
  TheIllustratorProfileComponent
} from "./user/components/the-illustrator-profile/the-illustrator-profile.component";
import {IlustratorProfileEditComponent} from "./user/pages/ilustrator-profile-edit/ilustrator-profile-edit.component";
import {UserConnectArtistComponent} from "./user/pages/user-connect-artist/user-connect-artist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarContentComponent, FooterContentComponent, TheUserLoginComponent, TheUserRegisterComponent, TheUserRecoverPasswordComponent, UserArtistComponent, TheWriterProfileComponent, WriterProfileComponent, TheWriterProfileEditComponent, IllustratorProfileComponent, TheIllustratorProfileComponent, IlustratorProfileEditComponent, UserConnectArtistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  showLogin = false;
}

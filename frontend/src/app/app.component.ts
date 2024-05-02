import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarContentComponent} from "./public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {
  TheMainPageBannerComponent
} from "./content/components/main-page/the-main-page-banner/the-main-page-banner.component";
import {
  TheMainPageGenresComponent
} from "./content/components/main-page/the-main-page-genres/the-main-page-genres.component";
import {
  TheMainPagePopularityComponent
} from "./content/components/main-page/the-main-page-popularity/the-main-page-popularity.component";
import {
  TheMainPageRecentBookComponent
} from "./content/components/main-page/the-main-page-recent-book/the-main-page-recent-book.component";
import {
  TheMainPagePopularArtistComponent
} from "./content/components/main-page/the-main-page-popular-artist/the-main-page-popular-artist.component";

import {ThePopularsPageComponent} from "./content/pages/the-populars-page/the-populars-page.component";
import { TheBookProfileComponent } from './content/components/the-book-profile/the-book-profile.component';
import { TheBookDetailsComponent } from './shared/components/the-book-details/the-book-details.component';
import {BookPublishPageComponent} from "./content/pages/book-publish-page/book-publish-page.component";
import {TheDetailsPageComponent} from "./shared/pages/the-details-page/the-details-page.component";
import {BookDetailsEditPageComponent} from "./content/pages/book-details-edit-page/book-details-edit-page.component";
import {MainPageComponent} from "./content/pages/main-page/main-page.component";
import {BookGenrePageComponent} from "./content/pages/book-genre-page/book-genre-page.component";
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
import {ArtistRoomComponent} from "./collaboration/pages/the-artist-room/artist-room.component";
import {TheChatPageComponent} from "./collaboration/pages/the-chat-page/the-chat-page.component";
import {
  TheSubscriptionApplicationComponent
} from "./monetization/pages/the-subscription-application/the-subscription-application.component";
import {
  TheMonetizationApplicationComponent
} from "./monetization/pages/the-monetization-application/the-monetization-application.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarContentComponent,
    FooterContentComponent,
    TheMainPageBannerComponent,
    TheMainPageGenresComponent,
    TheMainPagePopularityComponent, TheMainPageRecentBookComponent, TheMainPagePopularArtistComponent, ThePopularsPageComponent,
    TheMainPagePopularityComponent,
    TheMainPageRecentBookComponent,
    TheMainPagePopularArtistComponent,
    TheBookProfileComponent,
    TheBookDetailsComponent, BookPublishPageComponent, TheDetailsPageComponent, BookDetailsEditPageComponent, MainPageComponent, BookGenrePageComponent,

    TheUserLoginComponent, TheUserRegisterComponent, TheUserRecoverPasswordComponent, UserArtistComponent, TheWriterProfileComponent, WriterProfileComponent, TheWriterProfileEditComponent, IllustratorProfileComponent, TheIllustratorProfileComponent, IlustratorProfileEditComponent, UserConnectArtistComponent,

    ArtistRoomComponent, TheChatPageComponent,

    TheSubscriptionApplicationComponent, TheMonetizationApplicationComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  showLogin = false;
}

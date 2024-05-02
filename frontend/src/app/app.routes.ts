import { Routes } from '@angular/router';
import {MainPageComponent} from "./content/pages/main-page/main-page.component";
import {UserRegisterComponent} from "./user/pages/user-register/user-register.component";
import {BookGenrePageComponent} from "./content/pages/book-genre-page/book-genre-page.component";
import {ThePopularsPageComponent} from "./content/pages/the-populars-page/the-populars-page.component";
import {
  TheSubscriptionApplicationComponent
} from "./monetization/pages/the-subscription-application/the-subscription-application.component";
import {
  TheMonetizationApplicationComponent
} from "./monetization/pages/the-monetization-application/the-monetization-application.component";
import {UserArtistComponent} from "./user/pages/user-artist/user-artist.component";
import {TheBookDetailsComponent} from "./shared/components/the-book-details/the-book-details.component";
import {BookPublishPageComponent} from "./content/pages/book-publish-page/book-publish-page.component";
import {BookProfileComponent} from "./content/pages/book-profile-page/book-profile.component";
import {ChapterComponent} from "./content/components/chapter/chapter/chapter.component";
import {WriterProfileComponent} from "./user/pages/writer-profile/writer-profile.component";
import {WriterProfileEditComponent} from "./user/pages/writer-profile-edit/writer-profile-edit.component";
import {BookDetailsEditPageComponent} from "./content/pages/book-details-edit-page/book-details-edit-page.component";
import {TheDetailsPageComponent} from "./shared/pages/the-details-page/the-details-page.component";
import {IllustratorProfileComponent} from "./user/pages/illustrator-profile/illustrator-profile.component";
import {UserConnectArtistComponent} from "./user/pages/user-connect-artist/user-connect-artist.component";
import {ArtistRoomComponent} from "./collaboration/pages/the-artist-room/artist-room.component";
import {TheChatSectionComponent} from "./collaboration/components/the-chat-section/the-chat-section.component";
import {TheChatPageComponent} from "./collaboration/pages/the-chat-page/the-chat-page.component";
import {ChapterPreviewComponent} from "./content/components/chapter/chapter-preview/chapter-preview.component";
import {BookDetailComponent} from "./content/pages/book-detail-page/book-detail.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: MainPageComponent},
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'register', component: UserRegisterComponent},
  {path:'', redirectTo:'/genre', pathMatch:'full'},
  {path:'genre', component: BookGenrePageComponent},
  {path:'',redirectTo:'/populars', pathMatch:'full'},
  {path:'populars', component: ThePopularsPageComponent},
  {path: '', redirectTo: '/subscription', pathMatch: 'full' },
  {path:'subscription', component: TheSubscriptionApplicationComponent},
  {path:'', redirectTo:'/monetization', pathMatch:'full'},
  {path:'monetization', component: TheMonetizationApplicationComponent},
  {path:'',redirectTo:'/artist', pathMatch:'full'},
  {path:'artist', component:UserArtistComponent},
  {path:'my-stories', component: BookDetailComponent},
  {path:'publish-1', component: BookPublishPageComponent},
  {path:'book-profile', component: BookProfileComponent},
  {path:'chapter', component: ChapterComponent},
  {path:'writer-profile', component: WriterProfileComponent},
  {path:'writer-profile/edit', component: WriterProfileEditComponent},
  {path:'',redirectTo:'/my-stories', pathMatch:'full'},
  {path:'my-stories', component: TheDetailsPageComponent},
  {path:'',redirectTo:'/publish', pathMatch:'full'},
  {path:'publish', component: BookPublishPageComponent},
  {path:'',redirectTo:'/story-edit', pathMatch:'full'},
  {path:'story-edit', component: BookDetailsEditPageComponent},
  {path:'',redirectTo:'/boulevard-book', pathMatch:'full'},
  {path:'boulevard-book', component: BookProfileComponent},
  {path:'illustrator-profile', component: UserConnectArtistComponent},
  {path:'artist-room', component: ArtistRoomComponent},
  {path:'chat', component: TheChatPageComponent},
  {path:'',redirectTo:'/boulevard-book', pathMatch:'full'},
  {path:'books-profile', component: BookProfileComponent},
  {path:'',redirectTo:'/chapter-preview', pathMatch:'full'},
  {path:'chapter-preview', component: ChapterPreviewComponent}
];

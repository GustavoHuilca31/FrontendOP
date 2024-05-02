import { Component } from '@angular/core';
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {
    TheMainPageBannerComponent
} from "../../components/main-page/the-main-page-banner/the-main-page-banner.component";
import {
    TheMainPageGenresComponent
} from "../../components/main-page/the-main-page-genres/the-main-page-genres.component";
import {
    TheMainPagePopularArtistComponent
} from "../../components/main-page/the-main-page-popular-artist/the-main-page-popular-artist.component";
import {
    TheMainPagePopularityComponent
} from "../../components/main-page/the-main-page-popularity/the-main-page-popularity.component";
import {
    TheMainPageRecentBookComponent
} from "../../components/main-page/the-main-page-recent-book/the-main-page-recent-book.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
    imports: [
        FooterContentComponent,
        NavbarContentComponent,
        TheMainPageBannerComponent,
        TheMainPageGenresComponent,
        TheMainPagePopularArtistComponent,
        TheMainPagePopularityComponent,
        TheMainPageRecentBookComponent
    ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}

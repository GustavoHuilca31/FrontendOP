import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {faInstagram, faTiktok, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-user-connect-artist',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatList,
    MatListItem,
    FaIconComponent,
    MatIcon,
    MatButton,
    MatCardImage,
    RouterLink
  ],
  templateUrl: './the-user-connect-artist.component.html',
  styleUrl: './the-user-connect-artist.component.css'
})
export class TheUserConnectArtistComponent {

  protected readonly faXTwitter = faXTwitter;
  protected readonly faInstagram = faInstagram;
  protected readonly faTiktok = faTiktok;
}

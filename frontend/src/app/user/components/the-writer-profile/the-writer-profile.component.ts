import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatList, MatListItem} from "@angular/material/list";
import {faInstagram, faTiktok, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-writer-profile',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage,
    MatButton,
    MatList,
    MatListItem,
    FaIconComponent,
    MatIcon,
    RouterLink
  ],
  templateUrl: './the-writer-profile.component.html',
  styleUrl: './the-writer-profile.component.css'
})
export class TheWriterProfileComponent {

  protected readonly faXTwitter = faXTwitter;
  protected readonly faInstagram = faInstagram;
  protected readonly faYoutube = faYoutube;
  protected readonly faTiktok = faTiktok;
}

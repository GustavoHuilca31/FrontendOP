import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {faInstagram, faTiktok, faXTwitter} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-the-illustrator-profile',
  standalone: true,
  imports: [
    FaIconComponent,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardImage,
    MatIcon,
    MatList,
    MatListItem
  ],
  templateUrl: './the-illustrator-profile.component.html',
  styleUrl: './the-illustrator-profile.component.css'
})
export class TheIllustratorProfileComponent {

  protected readonly faXTwitter = faXTwitter;
  protected readonly faInstagram = faInstagram;
  protected readonly faTiktok = faTiktok;
}

import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faInstagram, faTiktok, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {MatList, MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-the-ilustrator-profile-edit',
  standalone: true,
  imports: [
    MatIcon,
    MatCard,
    MatCardContent,
    FaIconComponent,
    MatListItem,
    MatList,
    MatCardImage
  ],
  templateUrl: './the-ilustrator-profile-edit.component.html',
  styleUrl: './the-ilustrator-profile-edit.component.css'
})
export class TheIlustratorProfileEditComponent {

  protected readonly faTiktok = faTiktok;
  protected readonly faInstagram = faInstagram;
  protected readonly faXTwitter = faXTwitter;
}

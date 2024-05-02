import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatAnchor, MatButton, MatFabButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {faInstagram, faTiktok, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-writer-profile-edit',
  standalone: true,
  imports: [
    FaIconComponent,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardImage,
    MatIcon,
    MatList,
    MatListItem,
    MatFabButton,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './the-writer-profile-edit.component.html',
  styleUrl: './the-writer-profile-edit.component.css'
})
export class TheWriterProfileEditComponent {

  protected readonly faXTwitter = faXTwitter;
  protected readonly faInstagram = faInstagram;
  protected readonly faTiktok = faTiktok;
}

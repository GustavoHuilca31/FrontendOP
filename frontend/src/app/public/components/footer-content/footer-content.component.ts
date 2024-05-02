import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'footer-content',
  standalone: true,
  imports: [
    MatIcon,
    FontAwesomeModule
  ],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.css'
})
export class FooterContentComponent {
  faXTwitter = faXTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
}

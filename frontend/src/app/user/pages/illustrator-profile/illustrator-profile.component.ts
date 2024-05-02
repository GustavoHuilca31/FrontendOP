import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {
  TheIllustratorProfileComponent
} from "../../components/the-illustrator-profile/the-illustrator-profile.component";

@Component({
  selector: 'app-illustrator-profile',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    TheIllustratorProfileComponent
  ],
  templateUrl: './illustrator-profile.component.html',
  styleUrl: './illustrator-profile.component.css'
})
export class IllustratorProfileComponent {

}

import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {
  TheIlustratorProfileEditComponent
} from "../../components/the-ilustrator-profile-edit/the-ilustrator-profile-edit.component";

@Component({
  selector: 'app-ilustrator-profile-edit',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    TheIlustratorProfileEditComponent
  ],
  templateUrl: './ilustrator-profile-edit.component.html',
  styleUrl: './ilustrator-profile-edit.component.css'
})
export class IlustratorProfileEditComponent {

}

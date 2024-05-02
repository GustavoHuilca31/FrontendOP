import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../../public/components/footer-content/footer-content.component";
import {TheAboutComponent} from "../../../components/about/the-about/the-about.component";

@Component({
  selector: 'app-the-about-page',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    TheAboutComponent
  ],
  templateUrl: './the-about-page.component.html',
  styleUrl: './the-about-page.component.css'
})
export class TheAboutPageComponent {

}

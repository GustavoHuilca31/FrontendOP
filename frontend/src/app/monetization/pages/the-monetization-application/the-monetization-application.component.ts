import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {
  TheHeroMonetizationComponent
} from "../../components/monetization-page/the-hero-monetization/the-hero-monetization.component";
import {
  TheStepMonetizationComponent
} from "../../components/monetization-page/the-step-monetization/the-step-monetization.component";

@Component({
  selector: 'the-monetization-application',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    TheHeroMonetizationComponent,
    TheStepMonetizationComponent
  ],
  templateUrl: './the-monetization-application.component.html',
  styleUrl: './the-monetization-application.component.css'
})
export class TheMonetizationApplicationComponent {

}

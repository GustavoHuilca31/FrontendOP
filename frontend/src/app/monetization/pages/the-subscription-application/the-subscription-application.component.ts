import { Component } from '@angular/core';
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {TheHeroSubscriptionComponent} from "../../components/subscription-page/the-hero-subscription/the-hero-subscription.component";
import {
  TheStepSubscriptionComponent
} from "../../components/subscription-page/the-step-subscription/the-step-subscription.component";

@Component({
  selector: 'the-subscription-application',
  standalone: true,
  imports: [
    FooterContentComponent,
    NavbarContentComponent,
    TheHeroSubscriptionComponent,
    TheStepSubscriptionComponent,
  ],
  templateUrl: './the-subscription-application.component.html',
  styleUrl: './the-subscription-application.component.css'
})
export class TheSubscriptionApplicationComponent {

}

import { Component } from '@angular/core';
import {SubscriptionCardsComponent} from "../subscription-cards/subscription-cards.component";

@Component({
  selector: 'the-hero-subscription',
  standalone: true,
  imports: [
    SubscriptionCardsComponent
  ],
  templateUrl: './the-hero-subscription.component.html',
  styleUrl: './the-hero-subscription.component.css'
})
export class TheHeroSubscriptionComponent {

}

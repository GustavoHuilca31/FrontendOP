import { Component } from '@angular/core';
import {CoinPackageCardsComponent} from "../coin-package-cards/coin-package-cards.component";

@Component({
  selector: 'the-step-subscription',
  standalone: true,
  imports: [
    CoinPackageCardsComponent
  ],
  templateUrl: './the-step-subscription.component.html',
  styleUrl: './the-step-subscription.component.css'
})
export class TheStepSubscriptionComponent {

}

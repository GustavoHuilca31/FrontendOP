import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import { FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import{faCheck} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'subscription-cards',
  standalone: true,
    imports: [
        MatCardContent,
        MatCard,
        MatCardHeader,
        FontAwesomeModule
    ],
  templateUrl: './subscription-cards.component.html',
  styleUrl: './subscription-cards.component.css'
})
export class SubscriptionCardsComponent {
      faCheck = faCheck;

}

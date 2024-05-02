import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'coin-package-cards',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './coin-package-cards.component.html',
  styleUrl: './coin-package-cards.component.css'
})
export class CoinPackageCardsComponent {

}

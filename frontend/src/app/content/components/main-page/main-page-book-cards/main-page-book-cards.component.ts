import { Component,Input } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-main-page-book-cards',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './main-page-book-cards.component.html',
  styleUrl: './main-page-book-cards.component.css'
})
export class MainPageBookCardsComponent {
  @Input() bookCover!: string;
  @Input() position!: number;
  @Input() bookGenre!: string;
  @Input() bookTitle!: string;
  @Input() bookWriter!: string;
  @Input() bookIllustrator!: string;
}

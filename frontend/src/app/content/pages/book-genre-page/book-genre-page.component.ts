import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {
  TheBookGenreRomanceComponent
} from "../../components/book-genre/the-book-genre-romance/the-book-genre-romance.component";
import {
  TheBookGenreFantasyComponent
} from "../../components/book-genre/the-book-genre-fantasy/the-book-genre-fantasy.component";
import {
  TheBookGenreComedyComponent
} from "../../components/book-genre/the-book-genre-comedy/the-book-genre-comedy.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {Observable, Observer} from "rxjs";
import {ExampleTab} from "../the-populars-page/the-populars-page.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-book-genre-page',
  standalone: true,
  imports: [
    NavbarContentComponent,
    MatTabGroup,
    MatTab,
    MatTabLabel,
    TheBookGenreRomanceComponent,
    TheBookGenreFantasyComponent,
    TheBookGenreComedyComponent,
    FooterContentComponent,
    AsyncPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './book-genre-page.component.html',
  styleUrl: './book-genre-page.component.css'
})
export class BookGenrePageComponent {

  asyncTabs: Observable<ExampleTab[]>;

  constructor(){
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Romance', content: ''},
          {label: 'Fantasia', content: ''},
          {label: 'Comedia', content: ''},
        ]);
      }, 1000);
    });
  }

}

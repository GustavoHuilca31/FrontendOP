import {Component} from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {Observable, Observer} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {BookPopularComponent} from "../../components/book-popular/books-popular-cards/book-popular.component";
import {
  BookPopularComedyComponent
} from "../../components/book-popular/book-popular-comedy/book-popular-comedy.component";
import {
  BookPopularRomanceComponent
} from "../../components/book-popular/book-popular-romance/book-popular-romance.component";
import {
  BookPopularFantasyComponent
} from "../../components/book-popular/book-popular-fantasy/book-popular-fantasy.component";

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'the-populars-page',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    MatTabGroup,
    MatTab,
    MatTabLabel,
    AsyncPipe,
    BookPopularComponent,
    BookPopularComedyComponent,
    BookPopularRomanceComponent,
    BookPopularFantasyComponent
  ],
  templateUrl: './the-populars-page.component.html',
  styleUrl: './the-populars-page.component.css'
})
export class ThePopularsPageComponent {
  asyncTabs: Observable<ExampleTab[]>;

  constructor(){
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Todo', content:''},
          {label: 'Romance', content: ''},
          {label: 'Fantasia', content: ''},
          {label: 'Comedia', content: ''},
        ]);
      }, 1000);
    });
  }


}

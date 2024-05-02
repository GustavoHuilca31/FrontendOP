import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageBookCardsComponent } from './main-page-book-cards.component';

describe('MainPageBookCardsComponent', () => {
  let component: MainPageBookCardsComponent;
  let fixture: ComponentFixture<MainPageBookCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageBookCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageBookCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

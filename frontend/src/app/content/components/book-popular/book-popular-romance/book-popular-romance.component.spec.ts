import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPopularRomanceComponent } from './book-popular-romance.component';

describe('BookPopularRomanceComponent', () => {
  let component: BookPopularRomanceComponent;
  let fixture: ComponentFixture<BookPopularRomanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPopularRomanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookPopularRomanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

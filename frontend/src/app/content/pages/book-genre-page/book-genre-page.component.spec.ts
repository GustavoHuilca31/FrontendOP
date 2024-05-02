import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGenrePageComponent } from './book-genre-page.component';

describe('BookGenrePageComponent', () => {
  let component: BookGenrePageComponent;
  let fixture: ComponentFixture<BookGenrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookGenrePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookGenrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

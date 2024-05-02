import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPopularComedyComponent } from './book-popular-comedy.component';

describe('BookPopularComedyComponent', () => {
  let component: BookPopularComedyComponent;
  let fixture: ComponentFixture<BookPopularComedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPopularComedyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookPopularComedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

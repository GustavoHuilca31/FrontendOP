import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPopularFantasyComponent } from './book-popular-fantasy.component';

describe('BookPopularFantasyComponent', () => {
  let component: BookPopularFantasyComponent;
  let fixture: ComponentFixture<BookPopularFantasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPopularFantasyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookPopularFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

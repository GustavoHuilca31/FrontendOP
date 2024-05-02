import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPublishPageComponent } from './book-publish-page.component';

describe('BookPublishPageComponent', () => {
  let component: BookPublishPageComponent;
  let fixture: ComponentFixture<BookPublishPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPublishPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookPublishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

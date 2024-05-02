import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPublishStepperComponent } from './book-publish-stepper.component';

describe('BookPublishStepperComponent', () => {
  let component: BookPublishStepperComponent;
  let fixture: ComponentFixture<BookPublishStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPublishStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookPublishStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

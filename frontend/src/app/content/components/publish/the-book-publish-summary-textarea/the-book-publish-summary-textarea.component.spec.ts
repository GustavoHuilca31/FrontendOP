import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookPublishSummaryTextareaComponent } from './the-book-publish-summary-textarea.component';

describe('TheBookPublishSummaryTextareaComponent', () => {
  let component: TheBookPublishSummaryTextareaComponent;
  let fixture: ComponentFixture<TheBookPublishSummaryTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookPublishSummaryTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookPublishSummaryTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

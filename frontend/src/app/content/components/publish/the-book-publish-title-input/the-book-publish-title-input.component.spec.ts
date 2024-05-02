import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookPublishTitleInputComponent } from './the-book-publish-title-input.component';

describe('TheBookPublishInputComponent', () => {
  let component: TheBookPublishTitleInputComponent;
  let fixture: ComponentFixture<TheBookPublishTitleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookPublishTitleInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheBookPublishTitleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

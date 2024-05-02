import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookPublishThumbnailComponent } from './the-book-publish-thumbnail.component';

describe('TheBookPublishThumbnailComponent', () => {
  let component: TheBookPublishThumbnailComponent;
  let fixture: ComponentFixture<TheBookPublishThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookPublishThumbnailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBookPublishThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

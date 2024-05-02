import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBookPublishGenresSelectComponent } from './the-book-publish-genres-select.component';

describe('BookPublishSelectComponent', () => {
  let component: TheBookPublishGenresSelectComponent;
  let fixture: ComponentFixture<TheBookPublishGenresSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBookPublishGenresSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheBookPublishGenresSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

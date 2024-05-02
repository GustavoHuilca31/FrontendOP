import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMainPageRecentBookComponent } from './the-main-page-recent-book.component';

describe('TheMainPageRecentBookComponent', () => {
  let component: TheMainPageRecentBookComponent;
  let fixture: ComponentFixture<TheMainPageRecentBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMainPageRecentBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheMainPageRecentBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

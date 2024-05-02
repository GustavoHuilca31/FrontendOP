import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMainPagePopularityComponent } from './the-main-page-popularity.component';

describe('TheMainPagePopularityComponent', () => {
  let component: TheMainPagePopularityComponent;
  let fixture: ComponentFixture<TheMainPagePopularityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMainPagePopularityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheMainPagePopularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

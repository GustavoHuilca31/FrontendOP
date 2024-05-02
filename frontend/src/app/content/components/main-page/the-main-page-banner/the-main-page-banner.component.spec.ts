import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMainPageBannerComponent } from './the-main-page-banner.component';

describe('TheMainPageBannerComponent', () => {
  let component: TheMainPageBannerComponent;
  let fixture: ComponentFixture<TheMainPageBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMainPageBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheMainPageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

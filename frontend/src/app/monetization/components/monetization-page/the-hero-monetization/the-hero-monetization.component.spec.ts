import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHeroMonetizationComponent } from './the-hero-monetization.component';

describe('TheHeroMonetizationComponent', () => {
  let component: TheHeroMonetizationComponent;
  let fixture: ComponentFixture<TheHeroMonetizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheHeroMonetizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheHeroMonetizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

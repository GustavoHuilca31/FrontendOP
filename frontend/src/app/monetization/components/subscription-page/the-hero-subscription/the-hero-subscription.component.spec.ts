import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHeroSubscriptionComponent } from './the-hero-subscription.component';

describe('TheHeroSubscriptionComponent', () => {
  let component: TheHeroSubscriptionComponent;
  let fixture: ComponentFixture<TheHeroSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheHeroSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheHeroSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

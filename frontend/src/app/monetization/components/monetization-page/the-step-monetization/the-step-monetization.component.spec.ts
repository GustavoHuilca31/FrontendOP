import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStepMonetizationComponent } from './the-step-monetization.component';

describe('TheStepSectionComponent', () => {
  let component: TheStepMonetizationComponent;
  let fixture: ComponentFixture<TheStepMonetizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheStepMonetizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheStepMonetizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

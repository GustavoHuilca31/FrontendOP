import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAboutPageComponent } from './the-about-page.component';

describe('TheAboutPageComponent', () => {
  let component: TheAboutPageComponent;
  let fixture: ComponentFixture<TheAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheAboutPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAboutComponent } from './the-about.component';

describe('TheAboutComponent', () => {
  let component: TheAboutComponent;
  let fixture: ComponentFixture<TheAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

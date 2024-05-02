import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePopularsPageComponent } from './the-populars-page.component';

describe('ThePopularsPageComponent', () => {
  let component: ThePopularsPageComponent;
  let fixture: ComponentFixture<ThePopularsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThePopularsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThePopularsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

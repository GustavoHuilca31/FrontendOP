import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheIllustratorProfileComponent } from './the-illustrator-profile.component';

describe('TheIllustratorProfileComponent', () => {
  let component: TheIllustratorProfileComponent;
  let fixture: ComponentFixture<TheIllustratorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheIllustratorProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheIllustratorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

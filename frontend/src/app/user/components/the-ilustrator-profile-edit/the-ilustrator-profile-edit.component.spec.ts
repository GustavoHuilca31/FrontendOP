import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheIlustratorProfileEditComponent } from './the-ilustrator-profile-edit.component';

describe('TheIlustratorProfileEditComponent', () => {
  let component: TheIlustratorProfileEditComponent;
  let fixture: ComponentFixture<TheIlustratorProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheIlustratorProfileEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheIlustratorProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

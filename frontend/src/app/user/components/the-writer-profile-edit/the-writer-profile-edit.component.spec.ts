import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWriterProfileEditComponent } from './the-writer-profile-edit.component';

describe('TheWriterProfileEditComponent', () => {
  let component: TheWriterProfileEditComponent;
  let fixture: ComponentFixture<TheWriterProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheWriterProfileEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheWriterProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

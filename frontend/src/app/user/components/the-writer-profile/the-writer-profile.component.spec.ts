import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWriterProfileComponent } from './the-writer-profile.component';

describe('TheWriterProfileComponent', () => {
  let component: TheWriterProfileComponent;
  let fixture: ComponentFixture<TheWriterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheWriterProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheWriterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

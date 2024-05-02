import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCarouselsComponent } from './main-page-carousels.component';

describe('MainPageCarouselsComponent', () => {
  let component: MainPageCarouselsComponent;
  let fixture: ComponentFixture<MainPageCarouselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageCarouselsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageCarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

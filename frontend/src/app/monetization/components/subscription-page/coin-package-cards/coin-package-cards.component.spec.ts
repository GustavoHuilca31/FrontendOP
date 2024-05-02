import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPackageCardsComponent } from './coin-package-cards.component';

describe('CoinPackageCardsComponent', () => {
  let component: CoinPackageCardsComponent;
  let fixture: ComponentFixture<CoinPackageCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinPackageCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinPackageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

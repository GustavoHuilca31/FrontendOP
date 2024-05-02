import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUserConnectArtistComponent } from './the-user-connect-artist.component';

describe('TheUserConnectArtistComponent', () => {
  let component: TheUserConnectArtistComponent;
  let fixture: ComponentFixture<TheUserConnectArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheUserConnectArtistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheUserConnectArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

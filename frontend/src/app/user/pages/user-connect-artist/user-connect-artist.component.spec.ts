import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConnectArtistComponent } from './user-connect-artist.component';

describe('UserConnectArtistComponent', () => {
  let component: UserConnectArtistComponent;
  let fixture: ComponentFixture<UserConnectArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserConnectArtistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserConnectArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

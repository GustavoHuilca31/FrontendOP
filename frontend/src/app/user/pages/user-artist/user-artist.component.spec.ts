import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArtistComponent } from './user-artist.component';

describe('UserArtistComponent', () => {
  let component: UserArtistComponent;
  let fixture: ComponentFixture<UserArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserArtistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

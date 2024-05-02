import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheChatSectionComponent } from './the-chat-section.component';

describe('TheChatRoomComponent', () => {
  let component: TheChatSectionComponent;
  let fixture: ComponentFixture<TheChatSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheChatSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheChatSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

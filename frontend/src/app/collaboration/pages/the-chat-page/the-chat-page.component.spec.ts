import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheChatPageComponent } from './the-chat-page.component';

describe('TheChatPageComponent', () => {
  let component: TheChatPageComponent;
  let fixture: ComponentFixture<TheChatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheChatPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitChatCardComponent } from './chit-chat-card.component';

describe('ChitChatCardComponent', () => {
  let component: ChitChatCardComponent;
  let fixture: ComponentFixture<ChitChatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitChatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitChatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitChatFormComponent } from './chit-chat-form.component';

describe('ChitChatFormComponent', () => {
  let component: ChitChatFormComponent;
  let fixture: ComponentFixture<ChitChatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitChatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitChatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

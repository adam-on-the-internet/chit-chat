import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitChatTableComponent } from './chit-chat-table.component';

describe('ChitChatTableComponent', () => {
  let component: ChitChatTableComponent;
  let fixture: ComponentFixture<ChitChatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitChatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitChatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

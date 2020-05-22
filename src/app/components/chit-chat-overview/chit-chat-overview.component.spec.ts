import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitChatOverviewComponent } from './chit-chat-overview.component';

describe('ChitChatOverviewComponent', () => {
  let component: ChitChatOverviewComponent;
  let fixture: ComponentFixture<ChitChatOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitChatOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitChatOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

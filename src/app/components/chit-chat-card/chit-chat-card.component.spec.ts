import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ChitChatCardComponent} from "./chit-chat-card.component";
import {CardComponent} from "../card/card.component";
import {LoadingComponent} from "../loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("ChitChatCardComponent", () => {
  let component: ChitChatCardComponent;
  let fixture: ComponentFixture<ChitChatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChitChatCardComponent, CardComponent, LoadingComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitChatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

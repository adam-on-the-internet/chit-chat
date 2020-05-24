import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ChitChatOverviewComponent} from "./chit-chat-overview.component";
import {ChitChatTableComponent} from "../chit-chat-table/chit-chat-table.component";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {LoadingComponent} from "../loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("ChitChatOverviewComponent", () => {
  let component: ChitChatOverviewComponent;
  let fixture: ComponentFixture<ChitChatOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChitChatOverviewComponent, ChitChatTableComponent, CardComponent, BodyComponent, LoadingComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitChatOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

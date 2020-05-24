import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SuggestComponent} from "./suggest.component";
import {RouterTestingModule} from "@angular/router/testing";
import {CardComponent} from "../card/card.component";
import {FormsModule} from "@angular/forms";
import {BodyComponent} from "../body/body.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("SuggestComponent", () => {
  let component: SuggestComponent;
  let fixture: ComponentFixture<SuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestComponent, CardComponent, BodyComponent],
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

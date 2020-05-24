import { TestBed } from "@angular/core/testing";

import { ChitChatService } from "./chit-chat.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("ChitChatService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: ChitChatService = TestBed.get(ChitChatService);
    expect(service).toBeTruthy();
  });
});

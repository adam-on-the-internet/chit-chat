import {Component, OnInit} from "@angular/core";
import {ChitChat} from "../../models/ChitChat.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {ChitChatService} from "../../services/chit-chat.service";

@Component({
  selector: "app-chit-chat-card",
  templateUrl: "./chit-chat-card.component.html",
  styleUrls: ["./chit-chat-card.component.scss"]
})
export class ChitChatCardComponent implements OnInit {
  public chitChat: ChitChat = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.chitChat);
  }

  private get previousId(): string {
    return this.ready ? this.chitChat._id : null;
  }

  constructor(
    private chitChatService: ChitChatService,
  ) {
  }

  public ngOnInit() {
    this.loadRandom();
  }

  public loadRandom() {
    this.chitChatService.getRandom(this.previousId)
      .subscribe((res) => this.chitChat = res,
        (error) => {
          console.log("get chitchat failed");
        });
  }

}

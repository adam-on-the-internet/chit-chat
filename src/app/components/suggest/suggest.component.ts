import {Component} from '@angular/core';
import {NavHelperService} from "../../services/nav-helper.service";
import {BooleanHelper} from "../../utilities/boolean.util";
import {ChitChatService} from "../../services/chit-chat.service";
import {ChitChat} from "../../models/ChitChat.model";

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent {
  public chitChat: ChitChat = {
    question: null,
    credit: null,
    _id: null,
    hidden: true,
  };

  public get hasQuestion(): boolean {
    return BooleanHelper.hasValue(this.chitChat.question);
  }

  constructor(
    private navHelperService: NavHelperService,
    private chitChatService: ChitChatService,
  ) {
  }

  public submit() {
    let response;
    this.chitChatService.suggest(this.chitChat)
      .subscribe((res) => response = res,
        (error) => {
          console.log("suggest chit chat failed");
        }, () => {
          this.navHelperService.goToDashboard();
        });
  }

}

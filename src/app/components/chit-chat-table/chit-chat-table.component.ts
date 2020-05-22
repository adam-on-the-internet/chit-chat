import {Component, Input} from '@angular/core';
import {ChitChat} from "../../models/ChitChat.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {NavHelperService} from "../../services/nav-helper.service";
import {ChitChatService} from "../../services/chit-chat.service";

@Component({
  selector: 'app-chit-chat-table',
  templateUrl: './chit-chat-table.component.html',
  styleUrls: ['./chit-chat-table.component.scss']
})
export class ChitChatTableComponent {
  @Input() public chitChats: ChitChat[] = [];

  public get hasChats(): boolean {
    return BooleanHelper.hasValue(this.chitChats) && this.chitChats.length > 0;
  }

  constructor(
    private navHelperService: NavHelperService,
    private chitChatService: ChitChatService,
  ) {
  }

  public edit(chitChat: ChitChat) {
    this.navHelperService.goToChitChatEditForm(chitChat._id);
  }

  public delete(chitChat: ChitChat) {
    let response;
    this.chitChatService.delete(chitChat._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("delete chitchat failed");
        }, () => {
          this.chitChats = this.chitChats.filter((cc) => {
            return cc._id !== chitChat._id;
          });
        });
  }

}

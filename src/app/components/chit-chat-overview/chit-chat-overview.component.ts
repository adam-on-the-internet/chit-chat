import {Component, OnInit} from '@angular/core';
import {ChitChatService} from "../../services/chit-chat.service";
import {ChitChat} from "../../models/ChitChat.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: 'app-chit-chat-overview',
  templateUrl: './chit-chat-overview.component.html',
  styleUrls: ['./chit-chat-overview.component.scss']
})
export class ChitChatOverviewComponent implements OnInit {
  public chitChats: ChitChat[] = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.chitChats);
  }

  constructor(
    private chitChatService: ChitChatService,
    private navHelperService: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.loadChitChats();
  }

  public goToCreateForm() {
    this.navHelperService.goToChitChatCreateForm();
  }

  private loadChitChats(): void {
    this.chitChatService.getAll()
      .subscribe((res) => this.chitChats = res,
        (error) => {
          console.log("get chitchats failed");
        });
  }

}

import {Component, OnInit} from "@angular/core";
import {BooleanHelper} from "../../utilities/boolean.util";
import {ActivatedRoute} from "@angular/router";
import {NavHelperService} from "../../services/nav-helper.service";
import {ChitChat} from "../../models/ChitChat.model";
import {ChitChatService} from "../../services/chit-chat.service";

@Component({
  selector: "app-chit-chat-form",
  templateUrl: "./chit-chat-form.component.html",
  styleUrls: ["./chit-chat-form.component.scss"]
})
export class ChitChatFormComponent implements OnInit {
  public chitChat: ChitChat = null;
  public showErrors = false;

  public get title(): string {
    if (this.editMode) {
      return "Edit Chit Chat";
    }
    return "Create Chit Chat";
  }

  public get errors(): string[] {
    const myErrors = [];
    if (this.questionInvalid) {
      myErrors.push("Please provide a question.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.chitChat);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.chitChat._id);
  }

  private get questionInvalid(): boolean {
    return !BooleanHelper.hasValue(this.chitChat.question);
  }

  constructor(
    private route: ActivatedRoute,
    private chitChatService: ChitChatService,
    private navHelper: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.setupForm();
  }

  public toggleHidden() {
    this.chitChat.hidden = !this.chitChat.hidden;
  }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.save();
    }
  }

  private save() {
    if (this.editMode) {
      this.runEdit();
    } else {
      this.runCreate();
    }
  }

  private runEdit() {
    let response;
    this.chitChatService.update(this.chitChat)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update chit chat failed");
        }, () => {
          this.navHelper.goChitChatOverview();
        });
  }

  private runCreate() {
    let response;
    this.chitChatService.create(this.chitChat)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create chit chat failed");
        }, () => {
          this.navHelper.goChitChatOverview();
        });
  }

  private setupForm() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (BooleanHelper.notNull(urlId)) {
      this.setupEditForm(urlId);
    } else {
      this.setupCreateForm();
    }
  }

  private setupEditForm(id: string): void {
    this.chitChatService.getSingle(id)
      .subscribe((res) => this.chitChat = res,
        (error) => {
          console.log("get chit chat failed");
        });
  }

  private setupCreateForm(): void {
    this.chitChat = {
      question: null,
      hidden: false,
      credit: null,
      _id: null,
    };
  }

}

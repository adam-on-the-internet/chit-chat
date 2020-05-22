import {Component, Input, OnInit} from '@angular/core';
import {ChitChat} from "../../models/ChitChat.model";

@Component({
  selector: 'app-chit-chat-table',
  templateUrl: './chit-chat-table.component.html',
  styleUrls: ['./chit-chat-table.component.scss']
})
export class ChitChatTableComponent implements OnInit {
  @Input() public chitChats: ChitChat[] = [];

  constructor() { }

  ngOnInit() {
  }

}

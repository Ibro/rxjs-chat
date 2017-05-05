import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

import * as moment from 'moment';
import 'rxjs/add/operator/throttleTime';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string;
  messages: string[] = [];

  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.chatService
      .getMessages()
      .throttleTime(1000)
      .subscribe((message: string) => {
        let currentTime = moment().format('hh:mm:ss a');
        let messageWithTimestamp =  `${currentTime}: ${message}`;
        this.messages.push(messageWithTimestamp);
      });
  }
}

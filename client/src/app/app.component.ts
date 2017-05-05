import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
      .subscribe((message: string) => {
        let currentTime = moment().format('hh:mm:ss a');
        let messageWithTimestamp =  `${currentTime}: ${message}`;;
        this.messages.push(messageWithTimestamp);
      });
  }
}

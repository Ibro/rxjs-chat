import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(chatService: ChatService) { }
}

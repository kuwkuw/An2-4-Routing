import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { MessagesService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    private router: Router,
    public messagesService: MessagesService
  ) { }

  onActivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Activated component:', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Deactivate component:', $event, routerOutlet);
  }

  onDisplayMessages(): void {
    this.router.navigate([{ outlets: { messages: ['messages'] } }]);
    this.messagesService.isDisplayed = true;
  }

}

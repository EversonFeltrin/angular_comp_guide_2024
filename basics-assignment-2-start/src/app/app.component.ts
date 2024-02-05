import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  // checkDisabled() {
  //   return this.username ? true : false;
  // }

  onClearUsername() {
    this.username = '';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-basis';
  condition = false;

  toggleVisibilityMessage(): void {
    this.condition = !this.condition;
  }
}

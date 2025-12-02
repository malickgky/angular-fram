import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export default class App {  //
  email = signal('lamah@gmail.com');

  updateEmail(newEmail: string) {
    this.email.set(newEmail);
  }
}

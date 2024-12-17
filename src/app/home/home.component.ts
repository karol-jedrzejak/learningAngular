import { Component } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = 'message z homa';
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key}`);
  }
}

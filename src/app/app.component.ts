import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Statemangement';
}

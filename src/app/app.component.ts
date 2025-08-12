import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './pages/form/login/login';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Login,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'roa';
}

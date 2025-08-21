import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout-encadreur',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './layout-encadreur.component.html',
  styleUrl: './layout-encadreur.component.scss'
})
export class LayoutencadreurComponent {
  public userService = inject(UserService)
}

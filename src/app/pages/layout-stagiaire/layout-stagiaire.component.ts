import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { MyReportsComponent } from "../../component/stagiaire/my-reports/my-reports.component";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout-stagiaire',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
],
  templateUrl: './layout-stagiaire.component.html',
  styleUrl: './layout-stagiaire.component.scss'
})
export class LayoutStagiaireComponent {
  public userService = inject(UserService)
}

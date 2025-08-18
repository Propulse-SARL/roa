import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { MyReportsComponent } from "../../component/stagiaire/my-reports/my-reports.component";

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

}

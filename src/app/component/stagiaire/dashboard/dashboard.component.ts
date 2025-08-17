import { Component } from '@angular/core';
import { StatistiquesComponent } from "../statistiques/statistiques.component";

@Component({
  selector: 'app-dashboard',
  imports: [StatistiquesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

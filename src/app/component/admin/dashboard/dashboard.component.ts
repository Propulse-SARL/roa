import { Component } from '@angular/core';
import { StatistiquesComponent } from "../statistiques/statistiques.component";
import { PerformencesComponent } from "../performences/performences.component";

@Component({
  selector: 'app-dashboard',
  imports: [StatistiquesComponent, PerformencesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

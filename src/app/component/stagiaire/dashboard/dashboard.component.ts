import { Component } from '@angular/core';
import { StatistiquesComponent } from "../statistiques/statistiques.component";
import { ListOfObjectivesComponent } from "../list-of-objectives/list-of-objectives.component";
import { PerformanceComponent } from "../performance/performance.component";

@Component({
  selector: 'app-dashboard',
  imports: [StatistiquesComponent, ListOfObjectivesComponent, PerformanceComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

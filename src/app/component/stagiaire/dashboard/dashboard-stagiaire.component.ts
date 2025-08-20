import { Component } from '@angular/core';
import { StatistiquesComponent } from "../statistiques/statistiques.component";
import { ListOfObjectivesComponent } from "../list-of-objectives/list-of-objectives.component";
import { PerformanceComponent } from "../performance/performance.component";

@Component({
  selector: 'app-dashboard-stagiaire',
  imports: [StatistiquesComponent, ListOfObjectivesComponent, PerformanceComponent],
  templateUrl: './dashboard-stagiaire.component.html',
  styleUrl: './dashboard-stagiaire.component.scss'
})
export class DashboardStagiaireComponent {

}

import { Component } from '@angular/core';
import { StatistiquesComponent } from "../statistiques/statistiques.component";
import { PerformencesComponent } from "../performences/performences.component";
import { RecentsReportsComponent } from "../recents-reports/recents-reports.component";

@Component({
  selector: 'app-dashboard',
  imports: [StatistiquesComponent, PerformencesComponent, RecentsReportsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

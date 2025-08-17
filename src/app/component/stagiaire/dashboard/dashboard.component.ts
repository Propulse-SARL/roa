import { Component } from '@angular/core';
import { StatistiquesComponent } from "../statistiques/statistiques.component";
import { ListOfObjectivesComponent } from "../list-of-objectives/list-of-objectives.component";

@Component({
  selector: 'app-dashboard',
  imports: [StatistiquesComponent, ListOfObjectivesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

import { Component } from '@angular/core';
import { ManagementStatistiqueComponent } from "../management-statistique/management-statistique.component";
import { ManagementTableComponent } from "../management-table/management-table.component";

@Component({
  selector: 'app-intern-management',
  imports: [ManagementStatistiqueComponent, ManagementTableComponent],
  templateUrl: './intern-management.component.html',
  styleUrl: './intern-management.component.scss'
})
export class InternManagementComponent {
  
}

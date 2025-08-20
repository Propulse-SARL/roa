import { Component } from '@angular/core';
import { ManagementStatistiqueComponent } from "../management-statistique/management-statistique.component";
import { ManagementTableComponent } from "../management-table/management-table.component";
import { Stagiaire } from '../add-stagiaire/add-stagiaire.component';

@Component({
  selector: 'app-intern-management',
  imports: [ManagementStatistiqueComponent, ManagementTableComponent],
  templateUrl: './intern-management.component.html',
  styleUrl: './intern-management.component.scss'
})
export class InternManagementComponent {
  newStagiaire!: Stagiaire;
  
  receiveStagiaire(stagiaire: Stagiaire){
    this.newStagiaire = stagiaire
    console.log('Stagiaire reçu dans InternManagement', this.newStagiaire);
  }
}

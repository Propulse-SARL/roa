import { Component, inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddObjectifComponent } from '../add-objectif/add-objectif.component';

interface stagiaire {
  id: number,
  name: string,
  firstName: string,
  departement: string,
  niveau: string,
  dateDebutStage: string,
  dateFinStage: string,
  status: string,

}

@Component({
  selector: 'app-management-table',
  imports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './management-table.component.html',
  styleUrl: './management-table.component.scss'
})
export class ManagementTableComponent implements OnInit {
  private dialog = inject(MatDialog);

  openAddObjectifForm(){
    const dialogRef = this.dialog.open(AddObjectifComponent,{})
    dialogRef.afterClosed().subscribe(result =>{
      console.log('Modal fermée', result);
    })
  }
  Stagiaires: stagiaire[] = [
    {
      id: 1,
      name: 'Tobassi',
      firstName: 'Michel',
      departement: 'Développement Web',
      niveau: 'Niveau1',
      dateDebutStage: '2025-08-01',
      dateFinStage: '2025-10-31',
      status: 'En cours'
    },
    {
      id: 2,
      name: 'Ngono',
      firstName: 'Clarisse',
      niveau: 'Niveau2',
      departement: 'UI/UX Design',
      dateDebutStage: '2025-07-15',
      dateFinStage: '2025-09-15',
      status: 'Terminé'
    },
    {
      id: 3,
      name: 'Mbappe',
      firstName: 'Kevin',
      niveau: 'Niveau2',
      departement: 'Data Science',
      dateDebutStage: '2025-06-01',
      dateFinStage: '2025-08-31',
      status: 'Terminé'
    },
    {
      id: 4,
      name: 'Ekambi',
      firstName: 'Laura',
      niveau: 'Niveau3',
      departement: 'Marketing Digital',
      dateDebutStage: '2025-08-10',
      dateFinStage: '2025-11-10',
      status: 'En cours'
    },
    {
      id: 5,
      name: 'Fokou',
      firstName: 'Jean',
      departement: 'Sécurité Informatique',
      niveau: 'Niveau1',
      dateDebutStage: '2025-09-01',
      dateFinStage: '2025-12-01',
      status: 'Prévu'
    }
  ];
  color: string[] = [];

  ngOnInit(): void {
    this.Stagiaires.forEach(() =>{
      this.color.push(this.getRandomColor());
    })
    console.log(this.color);
    
  }

  getRandomColor():string{
    const r = Math.floor(Math.random() * 256 )
    const g = Math.floor(Math.random() * 256 )
    const b = Math.floor(Math.random() * 256 )
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  }
}

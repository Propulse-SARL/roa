import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddStagiaireComponent } from '../add-stagiaire/add-stagiaire.component';
@Component({
  selector: 'app-management-statistique',
  imports: [
    MatDialogModule,
  ],
  templateUrl: './management-statistique.component.html',
  styleUrl: './management-statistique.component.scss'
})
export class ManagementStatistiqueComponent {
  private dialog = inject(MatDialog)

  openAddStagiaireForm(){
    const dialogRef = this.dialog.open(AddStagiaireComponent,{});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fermée, données', result);
      
    })
  }
}

import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddStagiaireComponent, Stagiaire } from '../add-stagiaire/add-stagiaire.component';
@Component({
  selector: 'app-management-statistique',
  imports: [
    MatDialogModule,
  ],
  templateUrl: './management-statistique.component.html',
  styleUrl: './management-statistique.component.scss'
})
export class ManagementStatistiqueComponent {
  
  //Gestion de la modale Ajouter un stagiaire
  @Output() stagiaireEvent = new EventEmitter<Stagiaire>();
  private dialog = inject(MatDialog)
  
  openAddStagiaireForm(){
    const dialogRef = this.dialog.open(AddStagiaireComponent,{});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fermée, données', result);
      this.stagiaireEvent.emit(result);
    })
  }
}

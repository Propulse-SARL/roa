import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddStagiaireComponent, Stagiaire } from '../add-stagiaire/add-stagiaire.component';
import { UserService } from '../../../services/user.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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
  private userService = inject(UserService)
  private _snackBar = inject(MatSnackBar);
  openAddStagiaireForm() {
    const dialogRef = this.dialog.open(AddStagiaireComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fermée, données', result);
      const champsStagiaire = ['username', 'email', 'niv_scolaire', 'ecole', 'departement', 'dte_debut_stage', 'dte_fin_stage', 'statut', 'image', 'password'];
      const filterResult = Object.fromEntries(
        Object.entries(result).filter(([key]) => champsStagiaire.includes(key))
      );
      console.log('Donnees filtrées:', filterResult);
      this.userService.addStagiaire(filterResult).subscribe({
        next: (response) => {
          console.log('Response: ', response);
          this._snackBar.open("Stagiaire ajouté", "OK", {
            duration: 5000,
            horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
            verticalPosition: 'top' as MatSnackBarVerticalPosition,
          })
        },
        error: (error) => {
          console.log("Impossible de créer le stagiaire");
          this._snackBar.open("Impossible d'ajouter le stagiaire", "OK", {
            duration: 5000,
            horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
            verticalPosition: 'top' as MatSnackBarVerticalPosition,
          })
        }
      })
    })
  }

  ReadStagiaire(): any{
    this.userService.readStagiaire().subscribe({
      next: (response: any) => {
        console.log('Response', response);

      },
      error: (err) => {
        alert("Impossible de lister les stagiaires");
      }
    })
  }
}

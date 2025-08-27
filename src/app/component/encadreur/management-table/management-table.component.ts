import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddObjectifComponent } from '../add-objectif/add-objectif.component';
import { Stagiaire } from '../add-stagiaire/add-stagiaire.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UserService } from '../../../services/user.service';
import { ObjectifsService } from '../../../services/objectifs.service';

@Component({
  selector: 'app-management-table',
  imports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  templateUrl: './management-table.component.html',
  styleUrl: './management-table.component.scss'
})
export class ManagementTableComponent implements OnInit {
  public userService = inject(UserService);
  private _snackBar = inject(MatSnackBar);
  private objectifService = inject(ObjectifsService);

  Stagiaires: Stagiaire[] = [];
  filterStagiaires!: Stagiaire[]

  ngOnInit(): void {
    //Couleurs du stagiaire
    this.Stagiaires.forEach(() => {
      this.color.push(this.getRandomColor());
    })

    //Exécution de la recherche
    this.searchForm.get('search')?.valueChanges.subscribe(val => {
      this.applyFilter(val || '')
      if (val == '') {
        this.filterStagiaires = this.Stagiaires
      }
    })
    //Récupération des stagiaires
    this.ReadStagiaire()
  }

  //Supression du stagiaire
  DeleteStagiaire(id: any): any {
    this.userService.deleteStagiaire(id).subscribe({
      next: (response: any) => {
        console.log('Response', response);
      },
      error: (err) => {
        console.log('Erreur', err);
      }
    })

    //Récupération des stagiaires
    this.ReadStagiaire()
    this._snackBar.open("Stagiaire supprimé", "OK", {
      duration: 5000,
      horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
    })
  }

  //Gestion de la recherche
  searchForm = new FormGroup({
    search: new FormControl(''),
    week: new FormControl<number | null>(null),
  });

  applyFilter(searchTerm: string) {
    const term = (searchTerm || '').toLocaleLowerCase();

    this.filterStagiaires = this.Stagiaires.filter(s =>
      (s.username || '').toLocaleLowerCase().includes(term)
    );
  }

  //Gestion de la modale Attribuer un objectif
  private dialog = inject(MatDialog);

  openAddObjectifForm(stagiaire: Stagiaire) {
    const dialogRef = this.dialog.open(AddObjectifComponent, {
      data: { StagiaireData: stagiaire }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        console.log('donnée du formulaire', result.formData);
        console.log('donnees du stagiaire', result.stagiaireData);
        this.objectifService.addObjectif(result.formData, result.stagiaireData).subscribe({
          next: (response: any) =>{
            console.log('Ajout dustagiaire response: ',response);            
          },
          error: (err)=>{
            console.log("Erreur d'ajout du stagiaire", err);
          }
        })
      }
    })
  }

  //Gestion de la suppression d'un stagière
  deleteStagiaire(id: any) {
    this.filterStagiaires = this.filterStagiaires.filter(s => s.id != id)
    console.log(this.filterStagiaires);
    this._snackBar.open("Stagiaire supprimé", "OK", {
      duration: 5000,
      horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
    })
  }

  //Gestion de la couleur pour la colonne département
  color: string[] = [];

  getRandomColor(): string {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  }

  ReadStagiaire(): any {
    this.userService.readStagiaire().subscribe({
      next: (response: any) => {
        this.Stagiaires = response.data
        this.filterStagiaires = this.Stagiaires
        console.log('Response', response);
      },
      error: (err) => {
        alert("Impossible de lister les stagiaires");
      }
    })
  }
}
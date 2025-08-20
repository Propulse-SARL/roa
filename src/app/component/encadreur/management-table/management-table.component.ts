import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddObjectifComponent } from '../add-objectif/add-objectif.component';
import { ManagementStatistiqueComponent } from '../management-statistique/management-statistique.component';
import { Stagiaire } from '../add-stagiaire/add-stagiaire.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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
export class ManagementTableComponent implements OnInit, OnChanges {

  //Gestion de la recherche
  searchForm = new FormGroup({
    search: new FormControl(''),
    week: new FormControl<number | null>(null),
  });

  applyFilter(searchTerm: string) {
    this.filterStagiaires = this.Stagiaires.filter(s =>
      s.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      s.firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
  }

  //Gestion de la modale Attribuer un objectif
  private dialog = inject(MatDialog);

  openAddObjectifForm(stagiaire: Stagiaire) {
    const dialogRef = this.dialog.open(AddObjectifComponent, {
      data: { StagiaireData: stagiaire }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fermée', result);
      this.newStagiaire = result
    })
  }

  //Gestion de l'ajout d'un nouveau stagiare
  @Input() newStagiaire!: Stagiaire;
  private _snackBar = inject(MatSnackBar);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newStagiaire'] && this.newStagiaire) {
      if (!(this.Stagiaires.some(s => s.id === this.newStagiaire.id))) {
        this.Stagiaires.push(this.newStagiaire);
        this._snackBar.open("Stagiaire supprimé", "OK", {
          duration: 5000,
          horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
          verticalPosition: 'top' as MatSnackBarVerticalPosition,
        })
      }
    }
  }

  //Gestion de la suppression d'un stagi
  deleteStagiaire(id: number) {
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
  }

  getRandomColor(): string {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  }

  //Tableau fictif de stagiaires
  Stagiaires: Stagiaire[] = [
    {
      id: 1,
      name: "Keuni",
      firstName: "Michel",
      dteNaiss: "2000-05-15",
      email: "michel.keuni@example.com",
      nivScolaire: "Licence 3",
      ecole: "Université de Douala",
      departement: "Informatique",
      dteDebutStage: "2025-07-01",
      dteFinStage: "2025-09-30",
      statut: "En cours",
    },
    {
      id: 2,
      name: "Ngono",
      firstName: "Sarah",
      dteNaiss: "1999-11-22",
      email: "sarah.ngono@example.com",
      nivScolaire: "Master 1",
      ecole: "Université de Yaoundé I",
      departement: "Ressources Humaines",
      dteDebutStage: "2025-06-10",
      dteFinStage: "2025-08-20",
      statut: "Terminé",
    },
    {
      id: 3,
      name: "Mbarga",
      firstName: "Jean",
      dteNaiss: "2001-02-08",
      email: "jean.mbarga@example.com",
      nivScolaire: "Licence 2",
      ecole: "Institut Supérieur de Technologie",
      departement: "Marketing",
      dteDebutStage: "2025-08-01",
      dteFinStage: "2025-10-15",
      statut: "En cours",
    },
    {
      id: 4,
      name: "Tchoua",
      firstName: "Brice",
      dteNaiss: "1998-09-12",
      email: "brice.tchoua@example.com",
      nivScolaire: "Master 2",
      ecole: "Université Catholique d’Afrique Centrale",
      departement: "Finance",
      dteDebutStage: "2025-05-20",
      dteFinStage: "2025-08-20",
      statut: "Terminé",
    },
    {
      id: 5,
      name: "Nana",
      firstName: "Cynthia",
      dteNaiss: "2002-04-25",
      email: "cynthia.nana@example.com",
      nivScolaire: "Licence 1",
      ecole: "Université de Buea",
      departement: "Communication",
      dteDebutStage: "2025-07-15",
      dteFinStage: "2025-09-15",
      statut: "En cours",
    }
  ];

  filterStagiaires: Stagiaire[] = this.Stagiaires

}

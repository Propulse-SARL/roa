import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RapportsService } from '../../../services/rapports.service';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
export interface Report {
  id: number,
  authorName: string,
  title: string,
  submissionDate: Date,
  objectifsList: Objectif[],
  department: "Informatique" | "Marketing";
}

export interface Objectif {
  id: number,
  title: string,
  description: string,
  Type: "Hebdomadaire" | "Journalier",
  Commentaire?: string,
  statut: boolean;
}

@Component({
  selector: 'app-my-reports',
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './my-reports.component.html',
  styleUrl: './my-reports.component.scss'
})
export class MyReportsComponent implements OnInit {
  private rapportService = inject(RapportsService)
  // private reportService = inject(RapportsService)
  rapports!: any

  //Gestion de la recherche
  searchForm = new FormGroup({
    search: new FormControl(''),
    week: new FormControl<number | null>(null),
  });
  filterReports: any = this.rapports;

  ngOnInit(): void {
    this.rapportService.readRapport().subscribe({
      next: (response) => {
        this.rapports = response
        console.log("Réponse");
        
      },
      error: (err)=>{
        console.log("Erreur", err);
        
      }
    })
    this.filterReports = this.rapports

    this.searchForm.get('search')?.valueChanges.subscribe(value =>
      this.applyFilter(value || '')
    )
  }

  applyFilter(searchTerm: string) {
    console.log(this.rapports); 
    // this.filterReports = this.rapports.filter(report =>
    //   report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   report.submissionDate.toDateString().toLowerCase().includes(searchTerm.toLowerCase())
    // )
  }

}

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
  private reportService = inject(RapportsService)
  reports!: Report[]

  //Gestion de la recherche
  searchForm = new FormGroup({
    search: new FormControl(''),
    week: new FormControl<number | null>(null),
  });
  filterReports: Report[] = this.reports;

  ngOnInit(): void {
    this.reports = this.reportService.getReports()
    this.filterReports = this.reports

    this.searchForm.get('search')?.valueChanges.subscribe(value =>
      this.applyFilter(value || '')
    )
  }

  applyFilter(searchTerm: string) {
    console.log(this.reports); 
    this.filterReports = this.reports.filter(report =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.submissionDate.toDateString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

}

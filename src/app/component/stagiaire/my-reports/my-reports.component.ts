import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

interface Report {
  no: number;
  title: string;
  submissionDate: string; // ou Date si tu préfères
  department: string;
}

@Component({
  selector: 'app-my-reports',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './my-reports.component.html',
  styleUrl: './my-reports.component.scss'
})
export class MyReportsComponent implements OnInit {

  searchForm = new FormGroup({
    search: new FormControl(''),
    week: new FormControl<number | null>(null),
  });

  reports: Report[] = [
    { no: 1, title: 'Rapport annuel 2025', submissionDate: '2025-08-01', department: 'Informatique' },
    { no: 2, title: 'Analyse des ventes', submissionDate: '2025-08-03', department: 'Marketing' },
    { no: 3, title: 'Rapport technique projet X', submissionDate: '2025-08-05', department: 'Développement' },
    { no: 4, title: 'Étude de marché', submissionDate: '2025-08-07', department: 'Marketing' },
    { no: 5, title: 'Bilan financier Q2', submissionDate: '2025-08-09', department: 'Finance' },
  ];

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.subscribe(value=>
      this.applyFilter(value || '')
    )
  }
  filterReports: Report[] = this.reports

  applyFilter(searchTerm: string) {
    this.filterReports = this.reports.filter(report =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.submissionDate.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
}

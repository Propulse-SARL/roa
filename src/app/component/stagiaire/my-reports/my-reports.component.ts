import { Component } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

interface Report {
  no: number;
  author: string;
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
export class MyReportsComponent {

  searchForm = new FormGroup({
    search: new FormControl(''),
    week: new FormControl<number | null>(null),
  });

  reports: Report[] = [
    { no: 1, author: 'Alice Dupont', title: 'Rapport annuel 2025', submissionDate: '2025-08-01', department: 'Informatique' },
    { no: 2, author: 'Bob Martin', title: 'Analyse des ventes', submissionDate: '2025-08-03', department: 'Marketing' },
    { no: 3, author: 'Clara Smith', title: 'Rapport technique projet X', submissionDate: '2025-08-05', department: 'Développement' },
    { no: 4, author: 'David Lee', title: 'Étude de marché', submissionDate: '2025-08-07', department: 'Marketing' },
    { no: 5, author: 'Emma Johnson', title: 'Bilan financier Q2', submissionDate: '2025-08-09', department: 'Finance' },
  ];
}

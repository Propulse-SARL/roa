import { Component, inject, OnInit } from '@angular/core';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { DetailObjectivesComponent } from '../detail-objectives/detail-objectives.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Objectif {
  id: number;
  titre: string;
  date: string;
  statut: 'nouveau' | 'en_cours' | 'accomplis';
}
@Component({
  selector: 'app-list-of-objectives',
  imports: [
    MatCheckbox,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './list-of-objectives.component.html',
  styleUrl: './list-of-objectives.component.scss'
})
export class ListOfObjectivesComponent implements OnInit {

  private dialog = inject(MatDialog)

  openDetailTask() {
    const dialogRef = this.dialog.open(DetailObjectivesComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fermée', result);

    })
  }

  searchForm = new FormGroup({
    search: new FormControl(''),
    week: new FormControl<number | null>(null),
  });

  objectifs: Objectif[] = [
    {
      id: 1,
      titre: 'Objectif hebdomadaire 1',
      date: '2025-08-10',
      statut: 'accomplis'
    },
    {
      id: 2,
      titre: 'Objectif hebdomadaire 2',
      date: '2025-08-17',
      statut: 'nouveau'
    },
    {
      id: 3,
      titre: 'Objectif hebdomadaire 3',
      date: '2025-08-24',
      statut: 'en_cours'
    },
    {
      id: 7,
      titre: 'Objectif Journalier 5',
      date: '2025-08-17',
      statut: 'nouveau'
    },
    {
      id: 4,
      titre: 'Objectif hebdomadaire 8',
      date: '2025-08-17',
      statut: 'nouveau'
    },
  ];

  color: string[] = [];

  ngOnInit(): void {
    this.objectifs.forEach(() => {
      this.color.push(this.getRandomColor());
    })
    console.log(this.color);

  }

  getRandomColor(): string {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  }
}

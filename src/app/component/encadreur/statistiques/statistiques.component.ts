import { UserService } from './../../../services/user.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistiques',
  imports: [],
  templateUrl: './statistiques.component.html',
  styleUrl: './statistiques.component.scss'
})
export class StatistiquesComponent implements OnInit {
  private userService = inject(UserService)

  nbStagiaire!: number
  ngOnInit(): void {
    this.userService.readStagiaire().subscribe({
      next:(response: any) =>{
        this.nbStagiaire = response.data.length
      }
    })
  }
}

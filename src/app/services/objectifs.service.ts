import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stagiaire } from '../component/encadreur/add-stagiaire/add-stagiaire.component';

export interface Objectif {
  id?: number,
  titre: string,
  description: string,
  type: string,
  nature: string,
  fin: string,
  commentaire?: string
}

@Injectable({
  providedIn: 'root'
})

export class ObjectifsService {

  constructor() { }

  private apiUrl = 'http://192.168.1.180:8000/api';
  http = inject(HttpClient);
  token = localStorage.getItem('token') || '';
  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  })

  addObjectif(objectifData: Objectif, stagiaire: Stagiaire){
    console.log("Le titre est: ", objectifData.titre);
    console.log("Objectif Data est égal à: ",objectifData);
    return this.http.post(`${this.apiUrl}/objectifs/${stagiaire.id}`, objectifData, {headers: this.headers})
  }
}

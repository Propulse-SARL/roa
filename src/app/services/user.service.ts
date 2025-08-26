import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Stagiaire } from '../component/encadreur/add-stagiaire/add-stagiaire.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private router = inject(Router)
  private  _snackBar = inject(MatSnackBar)
  constructor() { }
  private apiUrl = 'http://192.168.1.180:8000/api';
  http = inject(HttpClient);
  token = localStorage.getItem('token') || '';
  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  })

  login(data: {identifier: string; password: string}): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,data);
  }
  
  logout(){
    localStorage.clear()
    this.router.navigate([''])
    this._snackBar.open("Déconnexion", "OK", {
      duration: 5000,
      horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
    })
  }

  addStagiaire(stagiaire: any){
    return this.http.post(`${this.apiUrl}/register-stagiaire`,stagiaire, {headers:this.headers})
  }

  readStagiaire(id?: number){
    const url = id ? `${this.apiUrl}/stagiaires/${id}` : `${this.apiUrl}/stagiaires`
    return this.http.get(`${url}`,{headers: this.headers})
  }

  deleteStagiaire(id: any){
    return this.http.delete(`${this.apiUrl}/stagiaires/${id}`,{headers: this.headers});
  }
  updateStagiaire(){
    return this.http.put(`${this.apiUrl}/stagiaire/profil`, {headers: this.headers})
  }
}

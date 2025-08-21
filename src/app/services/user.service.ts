import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private router = inject(Router)
  constructor() { }
  private apiUrl = 'http://192.168.1.161:8000/api';
  http = inject(HttpClient);

  login(data: {identifier: string; password: string}): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,data);
  }
  
  logout(){
    localStorage.clear()
    this.router.navigate([''])
  }
}

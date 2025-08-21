import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private userService = inject(UserService);
  private router = inject(Router);

  loginForm = new FormGroup({
    identifier: new FormControl('',[Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  onSubmit(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value as any).subscribe({
        next: (response) => {
          localStorage.setItem('token',response.token);
          localStorage.setItem('user',JSON.stringify(response.user));
          console.log('token',response);
          if(response.user.role == 'encadreur' || response.user.role == 'admin'){
            this.router.navigate(['/encadreur']);
          }else if(response.user.role='stagiaire'){
            this.router.navigate(['/stagiaire'])
          }
        },
        error: (err) => {
          console.log('Erreur de connexion', err);
          alert('Identifiants incorrects');
        }
      })
    }
  }
}
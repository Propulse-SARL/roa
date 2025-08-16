import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
  loginForm = new FormGroup({
    identifier: new FormControl('',[Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);      
    }
  }
}



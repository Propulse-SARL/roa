import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-profil',
  imports: [ReactiveFormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {

  profilForm = new FormGroup({
    name: new FormControl(''),
    firstName: new FormControl(''),
    departement: new FormControl(''),
    email: new FormControl(''),
    changePasswordForm: new FormGroup({
      lastPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    })
  })

  changePasswordError: string = ''
  changePasswordSubmit() {
    
    if (this.profilForm.get('changePasswordForm.newPassword')?.value != this.profilForm.get('changePasswordForm.confirmPassword')?.value) {
      this.changePasswordError = 'Veuillez vérifier la confirmation du mot de passe';
    }
    return;
  }

  // onSubmit(){
  //   if 
  // }
}

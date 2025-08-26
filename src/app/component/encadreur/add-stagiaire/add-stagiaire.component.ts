import { MatDialogRef } from '@angular/material/dialog';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface Stagiaire{
  id?: number,
  name?: string,
  firstname?: string,
  username: string,
  email: string,
  niv_scolaire: string,
  ecole:string,
  departement: string,
  dte_debut_stage: Date,
  dte_fin_stage: Date,
  statut: string,
  image?: string,
  password: string
}

@Component({
  selector: 'app-add-stagiaire',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './add-stagiaire.component.html',
  styleUrl: './add-stagiaire.component.scss'
})
export class AddStagiaireComponent {
  error!: string;
  addStagiaireForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    niv_scolaire: new FormControl('', [Validators.required] ),
    ecole: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    departement: new FormControl('', [Validators.required] ),
    dte_debut_stage: new FormControl('', [Validators.required] ),
    dte_fin_stage: new FormControl('', [Validators.required] ),
    statut: new FormControl('', [Validators.required] ),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
    image: new FormControl('images/logoPropulse'),
  });

  private dialogRef = inject(MatDialogRef<AddStagiaireComponent>)

  onSubmit(){
    if((this.addStagiaireForm.get('password')?.value != this.addStagiaireForm.get('confirmPassword')?.value) || this.addStagiaireForm.get('password')?.value == '' ){
      this.error = "Les champs de mot de passe ne correspondent pas";
      return; 
    }
    if (this.addStagiaireForm.valid){
      
      const name = this.addStagiaireForm.get('name')?.value || ''
      const firstName = this.addStagiaireForm.get('firstName')?.value || ''
      this.addStagiaireForm.patchValue({
        username: name.toLowerCase() + ' ' + firstName.toLowerCase(),
      })

      console.log(this.addStagiaireForm.value);
      this.dialogRef.close(this.addStagiaireForm.value)
    }
    else{
      this.error = 'Veuillez remplir correctement les champs'
      console.log('Erreur');
    }
  }
}

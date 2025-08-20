import { MatDialogRef } from '@angular/material/dialog';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface Stagiaire{
  id: number,
  name: string,
  firstName: string,
  dteNaiss: string,
  email: string,
  nivScolaire: string,
  ecole:string,
  departement: string,
  dteDebutStage: string,
  dteFinStage: string,
  statut: string,
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
  error!: boolean;
  addStagiaireForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dteNaiss: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nivScolaire: new FormControl('', [Validators.required] ),
    ecole: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    departement: new FormControl('', [Validators.required] ),
    dteDebutStage: new FormControl('', [Validators.required] ),
    dteFinStage: new FormControl('', [Validators.required] ),
    statut: new FormControl('', [Validators.required] ),    
  });

  private dialogRef = inject(MatDialogRef<AddStagiaireComponent>)


  onSubmit(){
    if (this.addStagiaireForm.valid){
      console.log(this.addStagiaireForm.value);
      this.dialogRef.close(this.addStagiaireForm.value)
    }
    else{
      this.error = true
      console.log('Erreur');
    }
  }
}

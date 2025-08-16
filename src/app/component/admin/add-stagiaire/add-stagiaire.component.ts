import { MatDialogRef } from '@angular/material/dialog';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nivScolaire: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    ecole: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    departement: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    dteDebutStage: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    dteFinStage: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    statut: new FormControl('', [Validators.required, Validators.minLength(3)] ),    
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

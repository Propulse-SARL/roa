import { Stagiaire } from './../add-stagiaire/add-stagiaire.component';
import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ManagementTableComponent } from '../management-table/management-table.component';
@Component({
  selector: 'app-add-objectif',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-objectif.component.html',
  styleUrl: './add-objectif.component.scss'
})
export class AddObjectifComponent {

  private dialogRef = inject(MatDialogRef<AddObjectifComponent>)
  private data = inject(MAT_DIALOG_DATA) as { StagiaireData: Stagiaire};
  
  stagiaireData = this.data.StagiaireData;

  addObjectifForm = new FormGroup({
    title : new FormControl('',[Validators.required, Validators.minLength(3)]),
    description : new FormControl('',[Validators.required, Validators.minLength(3)]),
    type : new FormControl('',[Validators.required, Validators.minLength(3)]),
    nature : new FormControl('',[Validators.required, Validators.minLength(3)]),
    debut : new FormControl('',[Validators.required, Validators.minLength(3)]),
    fin : new FormControl('',[Validators.required, Validators.minLength(3)]),
    priorite : new FormControl('',[Validators.required, Validators.minLength(3)]),
    statut : new FormControl('',[Validators.required, Validators.minLength(3)]),
    commentaire : new FormControl(''),
  })

  error = false;
  onSubmit(){
    if (this.addObjectifForm.valid){
      this.dialogRef.close(this.addObjectifForm.value)
      console.log('Formulaire valide');
    }else{
      console.log('Formulaire invalide');
      this.error = true;
    }
  }
  


}

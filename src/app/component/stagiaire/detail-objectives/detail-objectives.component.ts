import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-objectives',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './detail-objectives.component.html',
  styleUrl: './detail-objectives.component.scss'
})
export class DetailObjectivesComponent {
  
  private dialogRef = inject(MatDialogRef)

 detailObjectifForm = new FormGroup({
    title: new FormControl({value:'', disabled: true}),
    description: new FormControl({value:'', disabled: true}),
    type: new FormControl({value:'', disabled: true}),
    nature: new FormControl({value:'', disabled: true}),
    debut: new FormControl({value:'', disabled: true}),
    fin: new FormControl({value:'', disabled: true}),
    priorite: new FormControl({value:'', disabled: true}),
    statut: new FormControl({value:'', disabled: true}),
    remarque: new FormControl('', [Validators.minLength(5), Validators.required]),
  })

  error = false;
  onSubmit() {
    if (this.detailObjectifForm.valid) {
      this.dialogRef.close(this.detailObjectifForm.value)
      console.log('Formulaire valide');
    } else {
      console.log('Formulaire invalide');
      this.error = true;
    }
  }
}

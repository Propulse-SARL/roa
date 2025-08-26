import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Stagiaire } from '../add-stagiaire/add-stagiaire.component';

@Component({
  selector: 'app-profil',
  imports: [ReactiveFormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent implements OnInit {
  private userService = inject(UserService)
  user!: Stagiaire

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

  stagiaire!: Stagiaire[]

  ReadStagiaire(): any {
    this.userService.readStagiaire().subscribe({
      next: (response: any) => {
        this.stagiaire = response.data
        console.log('Response', response);
      },
      error: (err) => {
        alert("Impossible de lister les stagiaires");
      }
    })
  }
  ngOnInit(): void {
    this.getUser()

    //Remplissage du formulaire avec les valeurs par défaut
    this.profilForm.setValue({
      name: this.user.name || '',
      firstName: this.user.firstname || '',
      departement: this.user.departement || '',
      email: this.user.name || '',
      changePasswordForm: {
        lastPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    });
  }

  getUser() {
    const stringUser = localStorage.getItem('user');

    if (!stringUser) {
      console.log('Utilisateur introuvable');
      return;
    }

    try {
      this.user = JSON.parse(stringUser);

      if (this.user?.username) {
        const parts = this.user.username.trim().split(' ');

        this.user.name = parts[0]?.toUpperCase() || '';
        this.user.firstname = parts[1]?.toUpperCase() || '';
      }

      console.log('Utilisateur chargé :', this.user);

    } catch (error) {
      console.error('Erreur lors du parsing du user :', error);
    }
  }


}
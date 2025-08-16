import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './pages/form/login/login';
import { LayoutAdminComponent } from "./pages/layout-admin/layout-admin.component";
import { AddStagiaireComponent } from "./component/admin/add-stagiaire/add-stagiaire.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Login,
    LayoutAdminComponent,
    AddStagiaireComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'roa';
}

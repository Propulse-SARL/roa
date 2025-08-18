import { DashboardComponent as DashboardStagiareComponent} from './component/stagiaire/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { Login } from './pages/form/login/login';
import { LayoutencadreurComponent } from './pages/layout-encadreur/layout-encadreur.component';
import { DashboardComponent } from './component/encadreur/dashboard/dashboard.component';
import { InternManagementComponent } from './component/encadreur/intern-management/intern-management.component';
import { LayoutStagiaireComponent } from './pages/layout-stagiaire/layout-stagiaire.component';
import { MyReportsComponent } from './component/stagiaire/my-reports/my-reports.component';
import { ProfilComponent } from './component/stagiaire/profil/profil.component';

export const routes: Routes = [
    {path:'', component: Login},
    {
        path: 'encadreur', component: LayoutencadreurComponent, children:[
            {path:'', component:InternManagementComponent},
            {path:'dashboard', component: DashboardComponent},
        ]
    },
    {
        path: 'stagiaire', component:LayoutStagiaireComponent, children: [
            {path: '', component:MyReportsComponent},
            {path: 'dashboard', component: DashboardStagiareComponent},
            {path: 'profil', component: ProfilComponent}
        ]
    }
];

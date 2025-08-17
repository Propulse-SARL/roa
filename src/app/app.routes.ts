import { Routes } from '@angular/router';
import { Login } from './pages/form/login/login';
import { LayoutencadreurComponent } from './pages/layout-encadreur/layout-encadreur.component';
import { DashboardComponent } from './component/encadreur/dashboard/dashboard.component';
import { InternManagementComponent } from './component/encadreur/intern-management/intern-management.component';

export const routes: Routes = [
    {path:'', component: Login},
    {
        path: 'encadreur', component: LayoutencadreurComponent, children:[
            {path:'', component:InternManagementComponent},
            {path:'dashboard', component: DashboardComponent},
        ]
    }
];

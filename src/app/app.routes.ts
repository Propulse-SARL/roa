import { Routes } from '@angular/router';
import { Login } from './pages/form/login/login';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { InternManagementComponent } from './component/admin/intern-management/intern-management.component';

export const routes: Routes = [
    {path:'', component: Login},
    {
        path: 'admin', component: LayoutAdminComponent, children:[
            {path:'', component:InternManagementComponent},
            {path:'dashboard', component: DashboardComponent},
        ]
    }
];

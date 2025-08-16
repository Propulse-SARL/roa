import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../../component/admin/dashboard/dashboard.component";
import { InternManagementComponent } from "../../component/admin/intern-management/intern-management.component";

@Component({
  selector: 'app-layout-admin',
  imports: [
    RouterOutlet,
    DashboardComponent,
    InternManagementComponent
],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss'
})
export class LayoutAdminComponent {

}

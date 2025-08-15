import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../../component/admin/dashboard/dashboard.component";

@Component({
  selector: 'app-layout-admin',
  imports: [
    RouterOutlet,
    DashboardComponent
],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss'
})
export class LayoutAdminComponent {

}

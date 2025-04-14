import { Component } from '@angular/core';
import { SideNavComponent } from "../../Dashboard/components/side-nav/side-nav.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [SideNavComponent, RouterModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

}

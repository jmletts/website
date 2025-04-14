import { Component } from '@angular/core';
import { Header2Component } from "../../components/header2/header2.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-web-layout',
  imports: [Header2Component, RouterModule],
  templateUrl: './web-layout.component.html',
  styleUrl: './web-layout.component.scss'
})
export class WebLayoutComponent {

}

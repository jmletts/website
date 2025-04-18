import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
    submenu = {
      Acct : false,
      Dash: false,
      In: false,
      Prod: false,
      Shp: false,
      One: false,
      Std: false,
      Sett: false,
      Supp: false
    };

hasOpen(control : string) {
  (Object.keys(this.submenu) as (keyof typeof this.submenu)[]).forEach(key => {
    if (key === control) {
      if (this.submenu[key] === true) {
        this.submenu[key] = false;
      } else {
        this.submenu[key] = true;
      }
    } 
    else {
      this.submenu[key] = false;
    } 
  });
}
}
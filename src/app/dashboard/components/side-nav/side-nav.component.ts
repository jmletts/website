import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../../components/loader/loader.component';
import { TokenService } from '../../../Services/token.service';

@Component({
  selector: 'app-side-nav',
  imports: [CommonModule, LoaderComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  constructor(private router: Router, private _tokenService: TokenService) {}
  loading = false;
  submenu = {
    Acct: false,
    Dash: false,
    In: false,
    Prod: false,
    Shp: false,
    One: false,
    Std: false,
    Sett: false,
    Supp: false,
  };

  hasOpen(control: string) {
    (Object.keys(this.submenu) as (keyof typeof this.submenu)[]).forEach(
      (key) => {
        if (key === control) {
          if (this.submenu[key] === true) {
            this.submenu[key] = false;
          } else {
            this.submenu[key] = true;
          }
        } else {
          this.submenu[key] = false;
        }
      }
    );
  }

  logOut(): void {
    this.loading = true; // Cambia el estado de carga a verdadero
    // Redirige a la página de login
    setTimeout(() => {
      this._tokenService.deleteCookie('token'); // Elimina la cookie con el token
      this.router.navigate(['/login']);
      this.loading = false; // Cambia el estado de carga a falso después de 2 segundos
    }, 2000);
  }
  // Función para eliminar la cookie


}

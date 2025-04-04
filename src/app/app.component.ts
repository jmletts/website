import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./website/home/home.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Header2Component } from './components/header2/header2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header2Component, HomeComponent, LoaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoading: boolean = true; // Estado inicial de carga

  ngOnInit(): void {
    // Simulamos la carga de datos con un delay
    this.loadData().subscribe(() => {
      this.isLoading = false; // Los datos se cargaron, ocultamos el loader
    });
  }

  loadData(): Observable<any> {
    return of(null).pipe(delay(3000)); // Simula un retraso de 3 segundos
  }

  
}

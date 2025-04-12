import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./website/home/home.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { CommonModule } from '@angular/common';
import { Header2Component } from './components/header2/header2.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header2Component,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  ngOnInit(): void {

  }



  
}

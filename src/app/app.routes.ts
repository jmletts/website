import { Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './website/login/logIn/login.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'loader', component: LoaderComponent},
    {path: 'dashboard', component: DashboardComponent}
];

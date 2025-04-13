import { Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './website/login/logIn/login.component';
import { SigninComponent } from './website/signin/signin.component';
import { HomeDashboard } from './Dashboard/home/home.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signin', component: SigninComponent },
    {path: 'dashboard', component: HomeDashboard },

];

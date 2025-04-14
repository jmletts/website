import { Routes } from '@angular/router';

import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './website/login/logIn/login.component';
import { SigninComponent } from './website/signin/signin.component';
import { HomeDashboard } from './Dashboard/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SigninComponent }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: HomeDashboard }
      // acá podés agregar más rutas como productos, usuarios, etc
    ]
  },
  { path: '**', redirectTo: '' }
];

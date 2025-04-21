import { Routes } from '@angular/router';
import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './website/login/logIn/login.component';
import { SigninComponent } from './website/signin/signin.component';
import { authGuard } from './auth.guard';
import { DisplayProdComponent } from './Dashboard/Products/display-prod/display-prod.component';
import { AddProductComponent } from './Dashboard/Products/add-product/add-product.component';

export const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SigninComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'products', // Cambia "Product" a "products" para que coincida con la URL
        children: [
          { path: 'display-products', component: DisplayProdComponent }, // Cambia "display-product" a "display-products"
          { path: 'add-product', component: AddProductComponent }, // Cambia "display-product" a "display-products"
        ],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Product } from '../Interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.appUrl = 'api/product'; //enlace dl backendpara el registro
  }

  getMyProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/my-products`, {
      withCredentials: true,
    });
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.appUrl}/add`, product, {
      withCredentials: true,
    });
  }
}

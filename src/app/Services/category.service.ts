import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Category } from '../Interfaces/category'; // Asumo que tienes esta interfaz

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  
  getMyCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/category/display`, {
      withCredentials: true,
    });
  }

  addCategory(category: Category): Observable<any> {
    return this.http.post(`${this.apiUrl}api/category/create`, category, {
      withCredentials: true,
    });
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}api/category/delete/${id}`, {
      withCredentials: true,
    });
  }
}

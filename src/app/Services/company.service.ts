import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Company } from '../Interfaces/company'; // Asumo que tienes esta interfaz

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  // Crear compañía
  addCompany(company: Company): Observable<any> {
    return this.http.post(`${this.apiUrl}api/company/add`, company, {
      withCredentials: true,
    });
  }

  // Obtener mi compañía
  getMyCompany(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/company/display`, {
      withCredentials: true,
    });
  }

  // Actualizar mi compañía
  updateMyCompany(company: Company): Observable<any> {
    return this.http.put(`${this.apiUrl}api/company/update`, company, {
      withCredentials: true,
    });
  }

  // Desactivar mi compañía
  deactivateMyCompany(): Observable<any> {
    return this.http.delete(`${this.apiUrl}api/company/deactivate`, {
      withCredentials: true,
    });
  }

  // Verificar si la compañía existe
  checkCompanyExists(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/company/check`, {
      withCredentials: true,
    });
  }
}

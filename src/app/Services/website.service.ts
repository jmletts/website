import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Website } from '../Interfaces/website';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  private appUrl: string;
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.appUrl = 'api/website'; //enlace dl backendpara el registro
  }

  getMyWebsite(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.appUrl}/my-web`, {
      withCredentials: true,
    });
  }

  createWebsite(website: Website): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.appUrl}/create`, website, {
      withCredentials: true,
    });
  }
}

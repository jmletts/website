import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { User } from '../Interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appUrl : string;
  private apiUrl : string;
  constructor(private http : HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.appUrl = 'api/user' //enlace dl backendpara el registro
   }
  
   signIn (user : User) : Observable <any> {
    return this.http.post(`${this.apiUrl}${this.appUrl}/register`, user);
   }

   logIn (user : User) : Observable <string> {
    return this.http.post<string>(`${this.apiUrl}${this.appUrl}/login`, user);
   }

}

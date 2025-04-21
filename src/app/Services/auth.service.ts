import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';
import { TokenService } from './token.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User | null = null;
  constructor(private _tokenService: TokenService) {
    this.decodeToken();
  }

  private decodeToken(): void {
    const token = this._tokenService.getCookie('token');
    if (token) {
      try {
        this.user = jwtDecode<User>(token);
        console.log('Decoded user:', this.user);
      } catch (error) {
        console.error('Error decoding token:', error);
        this.user = null;
      }
    }
  }


  getUserName(): string | null {
    return this.user?.name || null;
  }

  getlastName(): string | null {
    return this.user?.lastName || null;
  }


}

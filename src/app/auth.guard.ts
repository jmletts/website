import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TokenService } from './Services/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const _tokenService = inject(TokenService);
  const platformId = inject(PLATFORM_ID); // Inyectamos PLATFORM_ID

  // Solo acceder a cookies si estamos en el navegador
  if (isPlatformBrowser(platformId)) {
    const token = _tokenService.getCookie('token'); // Cambia 'token' por el nombre de tu cookie

    if (token) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  }

  return true; // O puedes retornar false si quieres evitar el acceso en SSR
};

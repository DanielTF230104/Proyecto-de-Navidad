import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './servicios/auth.service';

export const AdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // IMPORTANTE: Comprobar que el rol sea exactamente 'administrador' [cite: 11, 26]
  if (authService.isLoggedIn() && authService.usuario()?.rol === 'administrador') {
    return true;
  }
  
  router.navigate(['/inicio']);
  return false;
};
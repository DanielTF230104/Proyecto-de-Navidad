import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(): boolean {

    // 🔹 1. Si no hay sesión en memoria, intentamos restaurarla
    if (!this.authService.isAuthenticated()) {
      this.authService.loadSession();
    }

    // 🔹 2. Si tras restaurar sigue autenticado, dejamos pasar
    if (this.authService.isAuthenticated()) {
      return true;
    }

    // 🔹 3. Si no está autenticado, guardamos la URL de retorno
    const redirectUrl = this.router.url;

    // 🔹 4. Redirigimos al login (comportamiento heredado)
    this.router.navigate(
      ['/login'],
      { queryParams: { returnUrl: redirectUrl } }
    );

    return false;
  }
}


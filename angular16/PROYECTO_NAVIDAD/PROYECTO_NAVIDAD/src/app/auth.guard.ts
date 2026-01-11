import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      const redirectUrl = state.url;
      this.router.navigate(['/login'], { queryParams: { returnUrl: redirectUrl } });
      console.log(redirectUrl);
      return false;
    }
  }
}

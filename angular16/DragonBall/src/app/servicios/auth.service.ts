import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoApiService } from './acceso-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = signal(false);
  isLoggedIn = this._isLoggedIn.asReadonly();

  public _usuario = signal<any | null>(null);
  usuario = this._usuario.asReadonly();

  private _authToken = signal<string | null>(null); // Nuevo signal para el token
  authToken = this._authToken.asReadonly(); // Hacemos este token reactivo también

  constructor(
    private accesoApi: AccesoApiService,
    private router: Router
  ) { }

  // 🔐 LOGIN
  login(username: string, password: string): void {
    this.accesoApi.login(username, password).subscribe({
      next: (resp) => {

        if (resp.ok && resp.token) {
          this._isLoggedIn.set(true);
          this._usuario.set(resp.usuario);
          this._authToken.set(resp.token);

          localStorage.setItem('authToken', resp.token);
          localStorage.setItem('username', resp.usuario.username);

          this.router.navigate(['/inicio']);
        } else {
          this._isLoggedIn.set(false);
          this._usuario.set(null);
          this._authToken.set(null);

          // opcional: si quieres redirigir en fallo
          // this.router.navigate(['/registro']);
        }
      },
      error: () => {
        this._isLoggedIn.set(false);
        this._usuario.set(null);
        this._authToken.set(null);
      }
    });
  }


  // 📝 REGISTRO
  registro(nombre: string, username: string, password: string): void {
    this.accesoApi.registro(nombre, username, password)
      .subscribe({
        next: (resp) => {
          if (resp.ok) {
            this.router.navigate(['/login']);
          }
        }
      });
  }

  // 🚪 LOGOUT
  logout(): void {
    this._isLoggedIn.set(false);
    this._usuario.set(null);
    this._authToken.set(null); // Limpiamos el token al cerrar sesión
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this._authToken() !== null; // Usamos () en lugar de get() o value
  }

  // Cargar la sesión desde el localStorage al iniciar la app
  public loadSession(): void {
    const token = localStorage.getItem('authToken');
    const username = localStorage.getItem('username');

    if (token && username) {
      this._authToken.set(token);
      this._usuario.set({ username });
      this._isLoggedIn.set(true);
    }
  }
}

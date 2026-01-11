import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoApiService } from './acceso-api.service';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private accesoApi = inject(AccesoApiService);
  private router = inject(Router);

  private _isLoggedIn = signal(false);
  isLoggedIn = this._isLoggedIn.asReadonly();

  public _usuario = signal<any | null>(null);
  usuario = this._usuario.asReadonly();

  // Requisito 1: Signal computado para saber si es Admin
  // Signal que detecta si el usuario es admin
  public isAdmin = computed(() => this._usuario()?.rol === 'administrador');
  login(username: string, password: string): void {
  this.accesoApi.login(username, password).subscribe({
    next: (resp) => {
      console.log("Respuesta del servidor:", resp);

      if (resp && resp.ok) { // Ahora que el servidor manda 'ok', es más simple
        
        // Extraemos el objeto usuario que viene dentro de la respuesta
        const datosUsuario = resp.usuario; 

        this._isLoggedIn.set(true);
        this._usuario.set(datosUsuario); // Esto es lo que activa el computed isAdmin
        
        // Guardamos en localStorage para que no se borre al refrescar
        localStorage.setItem('username', datosUsuario.username);
        localStorage.setItem('rol', datosUsuario.rol);

        console.log("Login exitoso. Rol detectado:", datosUsuario.rol);
        this.router.navigate(['/inicio']); 
      } else {
        alert(resp.mensaje || "Credenciales incorrectas");
      }
    },
    error: (err) => {
      console.error("Error en el login:", err);
      alert("Error al conectar con el servidor");
    }
  });
}

  // Quitamos 'rol' de los argumentos de la función principal
  registro(nombre: string, username: string, pass: string, imagen: string, rol: string) {
    const body = { nombre, username, pass, imagen, rol };
    // Eliminamos los "..." y simplemente retornamos el observable
    return this.http.post('http://localhost:3000/usuarios/grabar', body);
}

  logout(): void {
    this._isLoggedIn.set(false);
    this._usuario.set(null);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
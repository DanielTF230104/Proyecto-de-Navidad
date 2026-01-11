import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private http = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3000/usuarios';
  
  public listadoUsuarios = signal<any[]>([]);

  constructor() {
    this.leerUsuarios();
  }

  leerUsuarios() {
    this.http.get<any[]>(`${this.baseUrl}/lista`).subscribe({
      next: (users) => {
        this.listadoUsuarios.set(users);
      },
      error: (err) => console.error('Error al leer usuarios:', err)
    });
  }

  eliminarUsuario(id: number) {
    this.http.delete(`${this.baseUrl}/borrar/${id}`).subscribe({
      next: () => this.leerUsuarios(),
      error: (err) => console.error('Error al borrar:', err)
    });
  }

  actualizarUsuario(usuario: any) {
    this.http.post(`${this.baseUrl}/grabar`, usuario).subscribe({
      next: () => this.leerUsuarios(),
      error: (err) => console.error('Error al actualizar/grabar:', err)
    });
  }
}
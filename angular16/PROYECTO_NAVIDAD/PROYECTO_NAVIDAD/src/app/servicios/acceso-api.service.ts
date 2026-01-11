import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/usuarios';

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/login`,
      { username, password }
    );
  }

  registro(nombre: string, username: string, password: string, imagen: string, rol: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/grabar`,
      { 
        nombre, 
        username, 
        password, 
        imagen, 
        rol 
      }
    );
  }
}
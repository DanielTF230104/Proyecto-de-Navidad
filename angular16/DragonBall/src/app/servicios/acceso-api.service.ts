import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccesoApiService {

  private apiUrl = 'http://localhost:3000/accesoDB';

  constructor(
    private http: HttpClient
  ) {}

  // 🔐 LOGIN
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/leer`,
      { username, password }
    );
  }

  // 📝 REGISTRO
  registro(nombre: string, username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/grabar`,
      { nombre, username, password }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MiPersonaje } from '../cruds/MisPersonajes/interfaces/miPersonaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersisteApiLocalService {
  private baseUrl: string = 'http://localhost:3000/dbzDB/mispersonajes';

  constructor(private http: HttpClient) { }

  verificarYCrearTabla(): Observable<any> {
    const url = `${this.baseUrl}/crear-tabla`;
    return this.http.get(url);
  }

  leerMisPersonajes(): Observable<MiPersonaje[]> {
    const url = `${this.baseUrl}/leer`;
    return this.http.get<MiPersonaje[]>(url);
  }

  // Función para generar un ID único basado en el nombre del personaje
  generarIdUnico(nombre: string): string {
    let hash = 0;
    if (nombre.length === 0) return hash.toString();
    for (let i = 0; i < nombre.length; i++) {
      const char = nombre.charCodeAt(i);
      hash = ((hash << 5) - hash) + char; // Bitwise operation
      hash |= 0; // Convert to 32-bit integer
    }
    return hash.toString(); // Devolvemos el ID como string
  }

  grabarMiPersonaje(personaje: MiPersonaje): Observable<any> {
    // Generamos un ID único para el personaje antes de guardarlo
    const idUnico = this.generarIdUnico(personaje.name);
    
    // Convertir el ID único a número
    personaje.id = parseInt(idUnico, 10); // Convertimos el ID único generado a un número

    const url = `${this.baseUrl}/grabar`;
    return this.http.post(url, personaje);
  }

  borrarMiPersonaje(id: number): Observable<any> {
    const url = `${this.baseUrl}/borrar/${id}`;
    return this.http.delete(url);
  }
}

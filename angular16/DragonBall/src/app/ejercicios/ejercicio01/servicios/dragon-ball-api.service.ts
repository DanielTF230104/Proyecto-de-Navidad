import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonajeAPI } from '../cruds/FiltrarPersonajes/interfaces/personaje-api';
import { FiltrosAPI } from '../cruds/FiltrarPersonajes/interfaces/filtros-api';

@Injectable({
  providedIn: 'root'
})
export class DragonBallApiService {
  private baseUrl: string = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) { }

  getPersonajePorNombre(nombre: string) {
    const url = `${this.baseUrl}?name=${nombre}`;
    return this.http.get<PersonajeAPI[]>(url);
  }

  getPersonajePorId(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<PersonajeAPI>(url);
  }

  getPersonajes(filtros: FiltrosAPI) {
    const params = new URLSearchParams();
    params.append('limit', '58');
    if (filtros.gender) params.append('gender', filtros.gender);
    if (filtros.race) params.append('race', filtros.race);
    if (filtros.affiliation) params.append('affiliation', filtros.affiliation);

    const url = `${this.baseUrl}?${params.toString()}`;
    return this.http.get<PersonajeAPI[]>(url);
  }
}


















/* 
// SEÑAL FILTRO
async getPersonajes(filtros: FiltrosAPI) {
  const params = new URLSearchParams();
  params.append('limit', '58');
  if (filtros.gender) params.append('gender', filtros.gender);
  if (filtros.race) params.append('race', filtros.race);
  if (filtros.affiliation) params.append('affiliation', filtros.affiliation);

  const url = `${this.baseUrl}?${params.toString()}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error en getPersonajes():', error);
    return [];
  }
} */
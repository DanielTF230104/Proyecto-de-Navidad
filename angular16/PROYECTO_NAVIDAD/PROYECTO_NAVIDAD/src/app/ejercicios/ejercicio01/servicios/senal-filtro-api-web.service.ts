import { Injectable, signal } from '@angular/core';
import { DragonBallApiService } from './dragon-ball-api.service';
import { SenalBuscaTFormaApiWebService } from './senal-busca-tforma-api-web.service';
import { PersonajeAPI } from '../cruds/FiltrarPersonajes/interfaces/personaje-api';
import { FiltrosAPI } from '../cruds/FiltrarPersonajes/interfaces/filtros-api';

@Injectable({
  providedIn: 'root'
})
export class SenalFiltroApiWebService {
  public listadoPersonajes = signal<PersonajeAPI[]>([]);
  constructor(
    private api: DragonBallApiService,
    private senalBuscaTForma: SenalBuscaTFormaApiWebService,
  ) { }

  cargarPersonajesAPI(filtros: FiltrosAPI) {
    this.api.getPersonajes(filtros)
      .subscribe(personajes => {
        this.listadoPersonajes.set(personajes);
      });
  }

  eliminarPersonajeAPI(indice: number) {
    const copia = [...this.listadoPersonajes()];
    copia.splice(indice, 1);
    this.listadoPersonajes.set(copia);
  }

  editarPersonajeAPI(personaje: PersonajeAPI) {
    this.senalBuscaTForma.editaTransformacion.set(personaje.name);
  }
}



















/* 
// DRAGON BALL API
async cargarPersonajesAPI() {
  const personajes = await this.api.getPersonajes(
    this.filtrosAPI()
  );
  console.log('Personajes cargados desde la API:', personajes);
}  */
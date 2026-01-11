import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonajeAPI } from '../interfaces/personaje-api';


@Component({
  selector: 'app-listado-filtro-api-web',
  templateUrl: './listado-filtro-api-web.component.html',
  styleUrls: ['./listado-filtro-api-web.component.css']
})
export class ListadoFiltroApiWebComponent {
  @Input()
  public listadoPersonajes: PersonajeAPI[] = []; // Aquí se almacenarán los datos obtenidos de la API

  @Output()
  enviarPersonajeAPadre: EventEmitter<PersonajeAPI> = new EventEmitter<PersonajeAPI>();
  emitirEditar(personaje: PersonajeAPI, indice: number) {
    this.emitirEliminar(indice);
    this.enviarPersonajeAPadre.emit(personaje);
  }

  @Output()
  enviarIndiceAPadre = new EventEmitter<number>();
  emitirEliminar(indice: number) {
    this.enviarIndiceAPadre.emit(indice);
  }
}

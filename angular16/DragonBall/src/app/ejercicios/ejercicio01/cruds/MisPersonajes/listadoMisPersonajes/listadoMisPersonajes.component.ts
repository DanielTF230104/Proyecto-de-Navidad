import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MiPersonaje } from '../interfaces/miPersonaje';


@Component({
  selector: 'app-listadoMisPersonajes',
  templateUrl: './listadoMisPersonajes.component.html',
  styleUrls: ['./listadoMisPersonajes.component.css']
})
export class ListadoMisPersonajesComponent {
  @Input()
  public listadoMisPersonajes: MiPersonaje[] = [];

  @Output()
  enviarIndiceAPadre: EventEmitter<number> = new EventEmitter<number>();
  eliminarIndice(i: number) {
    this.enviarIndiceAPadre.emit(i);
  }

  @Output()
  enviarMiPersonajeAPadre: EventEmitter<MiPersonaje> = new EventEmitter<MiPersonaje>();
  editarMiPersonaje(miPersonaje: MiPersonaje, i: number) {
    this.eliminarIndice(i);
    this.enviarMiPersonajeAPadre.emit(miPersonaje);
  }
}

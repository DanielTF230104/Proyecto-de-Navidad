import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MiPersonaje } from '../interfaces/miPersonaje';


@Component({
  selector: 'app-miPersonaje',
  templateUrl: './miPersonaje.component.html',
  styleUrls: ['./miPersonaje.component.css']
})
export class MiPersonajeComponent implements OnChanges {
  public miPersonaje: MiPersonaje = { name: '', ki: 0 };
  @Output()
  enviarMiPersonajeAPadre: EventEmitter<MiPersonaje> = new EventEmitter<MiPersonaje>();
  agregarMiPersonaje() {
    this.enviarMiPersonajeAPadre.emit({ ...this.miPersonaje });
    this.miPersonaje = { name: "", ki: 0 };
  }

  @Input()
  public editaMiPersonaje?: MiPersonaje;
  ngOnChanges(changes: SimpleChanges) {
    if (this.editaMiPersonaje) {
      this.miPersonaje = { ...this.editaMiPersonaje };
    }
  }
}
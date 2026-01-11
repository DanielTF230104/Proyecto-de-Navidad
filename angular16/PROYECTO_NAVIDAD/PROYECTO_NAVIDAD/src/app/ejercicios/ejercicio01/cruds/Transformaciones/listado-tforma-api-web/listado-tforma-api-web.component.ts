import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TransformacionAPI } from '../interfaces/transformacion-api';


@Component({
  selector: 'app-listado-tforma-api-web',
  templateUrl: './listado-tforma-api-web.component.html',
  styleUrls: ['./listado-tforma-api-web.component.css']
})
export class ListadoTFormaApiWebComponent {
  @Input()
  public listadoTransformaciones: TransformacionAPI[] = [];

  @Output()
  enviarTFormaAPadre = new EventEmitter<TransformacionAPI>();
  emitirEditar(transformacion: TransformacionAPI, indice: number) {
    this.emitirEliminar(indice);
    this.enviarTFormaAPadre.emit(transformacion);
  }

  @Output()
  enviarIndiceAPadre = new EventEmitter<number>();
  emitirEliminar(indice: number) {
    this.enviarIndiceAPadre.emit(indice);
  }
}

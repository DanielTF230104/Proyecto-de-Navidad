import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-busca-tforma-api-web',
  templateUrl: './busca-tforma-api-web.component.html',
  styleUrls: ['./busca-tforma-api-web.component.css']
})
export class BuscaTFormaApiWebComponent implements OnChanges {
  public nombre: string = '';
  @Output()
  enviarNombreAPadre = new EventEmitter<string>();
  buscarTForma() {
    this.enviarNombreAPadre.emit(this.nombre);
  }

  @Input()
  public editaTransformacion?: string;
  ngOnChanges(changes: SimpleChanges) {
    if (this.editaTransformacion) {
      this.nombre = this.editaTransformacion;
    }
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FiltrosAPI } from '../interfaces/filtros-api';


@Component({
  selector: 'app-filtro-api-web',
  templateUrl: './filtro-api-web.component.html',
  styleUrls: ['./filtro-api-web.component.css']
})
export class FiltroApiWebComponent {
  public filtrosAPI: FiltrosAPI = {
    gender: '',
    race: '',
    affiliation: ''
  };

  @Output()
  filtrosAPIChange = new EventEmitter<FiltrosAPI>();
  emitirFiltros() {
    this.filtrosAPIChange.emit({ ...this.filtrosAPI });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html'
})
export class ListadoUsuariosComponent {
  @Input() usuarios: any[] = [];
  @Output() eliminar = new EventEmitter<number>();
  @Output() editar = new EventEmitter<any>();
}
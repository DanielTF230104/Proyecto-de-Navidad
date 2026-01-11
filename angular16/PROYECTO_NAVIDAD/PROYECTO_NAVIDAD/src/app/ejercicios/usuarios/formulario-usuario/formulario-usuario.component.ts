import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html'
})
export class FormularioUsuarioComponent implements OnChanges {
  @Input() usuarioAEditar: any;
  @Output() enviarUsuario = new EventEmitter<any>();

  public usuario: any = { 
    nombre: '', 
    username: '', 
    password: '', 
    rol: 'usuario', 
    imagen: '' 
  };

  ngOnChanges(changes: SimpleChanges) {
    if (this.usuarioAEditar) {
      this.usuario = { ...this.usuarioAEditar };
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.usuario.imagen = e.target.result;
      reader.readAsDataURL(file);
    }
  }

  guardar() {
    this.enviarUsuario.emit({ ...this.usuario });
    this.usuario = { nombre: '', username: '', password: '', rol: 'usuario', imagen: '' };
  }
}
import { Component, OnInit, signal } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios-principal',
  templateUrl: './usuarios-principal.component.html'
})
export class UsuariosPrincipalComponent implements OnInit {
  public listadoUsuarios = this.usuariosService.listadoUsuarios;

  public usuarioAEditar = signal<any>(this.nuevoUsuarioVacio());

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.leerUsuarios();
  }

  private nuevoUsuarioVacio() {
    return {
      nombre: '',
      username: '',
      password: '', 
      rol: 'usuario',
      imagen: ''
    };
  }

  recibirUsuarioDeHijo(usuario: any) {
    this.usuariosService.actualizarUsuario(usuario);
    this.usuarioAEditar.set(this.nuevoUsuarioVacio());
  }

  editarUsuarioDeHijo(usuario: any) {
    this.usuarioAEditar.set({ ...usuario });
  }

  eliminarUsuarioDeHijo(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.usuariosService.eliminarUsuario(id);
    }
  }

  limpiarFormulario() {
    this.usuarioAEditar.set(this.nuevoUsuarioVacio());
  }
}
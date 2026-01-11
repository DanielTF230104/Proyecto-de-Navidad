import { Injectable, signal } from '@angular/core';
import { MiPersonaje } from '../cruds/MisPersonajes/interfaces/miPersonaje';
import { PersisteApiLocalService } from './persiste-api-local.service';

@Injectable({
  providedIn: 'root'
})
export class SenalMisPersonajesService {
  public listadoMisPersonajes = signal<MiPersonaje[]>([]);

  constructor(private persisteApiLocal: PersisteApiLocalService) { }

  verificarYCrearTabla() {
    this.persisteApiLocal.verificarYCrearTabla()
      .subscribe({
        next: (response) => {
          console.log('Tabla verificada/creada:', response);
          this.leerMisPersonajes();
        },
        error: (error) => {
          console.error('Error al verificar/crear la tabla:', error);
        }
      });
  }

  leerMisPersonajes() {
    this.persisteApiLocal.leerMisPersonajes()
      .subscribe({
        next: (personajes: MiPersonaje[]) => {
          this.listadoMisPersonajes.set(personajes);
        },
        error: (error) => {
          console.error('Error al leer los personajes:', error);
        }
      });
  }

  agregarMiPersonaje(miPersonaje: MiPersonaje) {
    this.persisteApiLocal.grabarMiPersonaje(miPersonaje)
      .subscribe({
        next: (response) => {
          console.log('Personaje agregado:', response);
          this.leerMisPersonajes();
        },
        error: (error) => {
          console.error('Error al agregar el personaje:', error);
        }
      });
    this.editaMiPersonaje.set(undefined);
  }

  eliminarMiPersonaje(indice: number) {
    this.persisteApiLocal.borrarMiPersonaje(indice)
      .subscribe({
        next: (response) => {
          console.log('Personaje borrado:', response);
          this.leerMisPersonajes();
        },
        error: (error) => {
          console.error('Error al borrar el personaje:', error);
        }
      });
  }

  public editaMiPersonaje = signal<MiPersonaje | undefined>(undefined);
  editarMiPersonaje(miPersonaje: MiPersonaje) {
    this.editaMiPersonaje.set({ ...miPersonaje });
  }
}

import { Injectable, signal } from '@angular/core';
import { DragonBallApiService } from './dragon-ball-api.service';
import { SenalMisPersonajesService } from './senalMisPersonajes.service';
import { TransformacionAPI } from '../cruds/Transformaciones/interfaces/transformacion-api';
import { MiPersonaje } from '../cruds/MisPersonajes/interfaces/miPersonaje';

@Injectable({
  providedIn: 'root'
})
export class SenalBuscaTFormaApiWebService {
  public listadoTransformaciones = signal<TransformacionAPI[]>([]);
  constructor(
    private conexionApiWeb: DragonBallApiService,
    private senalMisPersonajes: SenalMisPersonajesService,
  ) { }

  buscarTransformaciones(nombre: string) { // httpClient, devuelve observable
    this.conexionApiWeb.getPersonajePorNombre(nombre)
      .subscribe(personaje => {
        if (!personaje || personaje.length === 0) {
          console.log('No se encontraron personajes con el nombre:', nombre);
          return;
        }
        const id = personaje[0].id;

        this.conexionApiWeb.getPersonajePorId(id)
          .subscribe(personaje => {
            // Asegurarnos de que las transformaciones estén presentes
            const transformaciones = personaje.transformations || [];

            // Crear el array combinado con el personaje primero y luego las transformaciones
            const resultado: TransformacionAPI[] = [
              {
                id: personaje.id,
                name: personaje.name,
                ki: personaje.ki,
                image: personaje.image
              },
              ...transformaciones  // Spread operator para agregar las transformaciones al array
            ];

            // Almacenar el resultado en listadoTransformaciones
            this.listadoTransformaciones.set(resultado);  // Almacenamos el array combinado
          });
      });
  }

  eliminarTForma(indice: number) {
    const copia = [...this.listadoTransformaciones()];
    copia.splice(indice, 1);
    this.listadoTransformaciones.set(copia);
  }

  public editaTransformacion = signal<string | undefined>(undefined);
  editarTForma(transformacion: TransformacionAPI) {
    const editaMiPersonaje: MiPersonaje = {
      name: transformacion.name,
      ki: transformacion.ki
    };
    this.senalMisPersonajes.editaMiPersonaje.set({ ...editaMiPersonaje });
  }
}

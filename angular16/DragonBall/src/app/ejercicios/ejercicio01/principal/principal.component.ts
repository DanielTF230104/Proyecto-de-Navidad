import { Component } from '@angular/core';
import { SenalMisPersonajesService } from '../servicios/senalMisPersonajes.service';
import { SenalBuscaTFormaApiWebService } from '../servicios/senal-busca-tforma-api-web.service';
import { SenalFiltroApiWebService } from '../servicios/senal-filtro-api-web.service';
import { MiPersonaje } from '../cruds/MisPersonajes/interfaces/miPersonaje';
import { TransformacionAPI } from '../cruds/Transformaciones/interfaces/transformacion-api';
import { FiltrosAPI } from '../cruds/FiltrarPersonajes/interfaces/filtros-api';
import { PersonajeAPI } from '../cruds/FiltrarPersonajes/interfaces/personaje-api';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  public listadoMisPersonajes = this.senalMisPersonajes.listadoMisPersonajes;
  public editaMiPersonaje = this.senalMisPersonajes.editaMiPersonaje;

  public listadoTransformaciones = this.senalBuscaTForma.listadoTransformaciones;
  public editaTransformacion = this.senalBuscaTForma.editaTransformacion;
  public listadoPersonajes = this.senalAPI.listadoPersonajes;

  constructor(
    private senalMisPersonajes: SenalMisPersonajesService,
    private senalBuscaTForma: SenalBuscaTFormaApiWebService,
    private senalAPI: SenalFiltroApiWebService
  ) { }

  ngOnInit() {
    this.senalMisPersonajes.verificarYCrearTabla();  // Verificar/crear tabla y cargar personajes
  }

  recibirMiPersonajeDeHijo(miPersonaje: MiPersonaje) { this.senalMisPersonajes.agregarMiPersonaje(miPersonaje); }
  eliminarMiPersonajeDeHijo(indice: number) { this.senalMisPersonajes.eliminarMiPersonaje(indice); }
  editarMiPersonajeDeHijo(miPersonaje: MiPersonaje) { this.senalMisPersonajes.editarMiPersonaje(miPersonaje); }

  recibirNombreDeHijo(nombre: string) { this.senalBuscaTForma.buscarTransformaciones(nombre); }
  eliminarTFormaDeHijo(indice: number) { this.senalBuscaTForma.eliminarTForma(indice) }
  editarTFormaDeHijo(transformacion: TransformacionAPI) { this.senalBuscaTForma.editarTForma(transformacion); }

  recibirFiltrosAPI(filtros: FiltrosAPI) { this.senalAPI.cargarPersonajesAPI(filtros); }
  eliminarPersonajeDeHijo(indice: number) { this.senalAPI.eliminarPersonajeAPI(indice); }
  editarPersonajeDeHijo(personaje: PersonajeAPI) { this.senalAPI.editarPersonajeAPI(personaje); }
}

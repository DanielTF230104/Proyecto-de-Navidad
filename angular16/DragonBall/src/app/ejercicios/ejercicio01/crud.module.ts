import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MiPersonajeComponent } from './cruds/MisPersonajes/miPersonaje/miPersonaje.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListadoMisPersonajesComponent } from './cruds/MisPersonajes/listadoMisPersonajes/listadoMisPersonajes.component';
import { FiltroApiWebComponent } from './cruds/FiltrarPersonajes/filtro-api-web/filtro-api-web.component';
import { ListadoFiltroApiWebComponent } from './cruds/FiltrarPersonajes/listado-filtro-api-web/listado-filtro-api-web.component';
import { BuscaTFormaApiWebComponent } from './cruds/Transformaciones/busca-tforma-api-web/busca-tforma-api-web.component';
import { ListadoTFormaApiWebComponent } from './cruds/Transformaciones/listado-tforma-api-web/listado-tforma-api-web.component';

@NgModule({
  declarations: [
    MiPersonajeComponent,
    PrincipalComponent,
    ListadoMisPersonajesComponent,
    FiltroApiWebComponent,
    ListadoFiltroApiWebComponent,
    BuscaTFormaApiWebComponent,
    ListadoTFormaApiWebComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class CrudModule { }

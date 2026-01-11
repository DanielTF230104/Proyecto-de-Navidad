import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiPersonajeComponent } from './cruds/MisPersonajes/miPersonaje/miPersonaje.component';
import { ListadoMisPersonajesComponent } from './cruds/MisPersonajes/listadoMisPersonajes/listadoMisPersonajes.component';
import { FormsModule } from '@angular/forms';
import { FiltroApiWebComponent } from './cruds/FiltrarPersonajes/filtro-api-web/filtro-api-web.component';
import { ListadoFiltroApiWebComponent } from './cruds/FiltrarPersonajes/listado-filtro-api-web/listado-filtro-api-web.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscaTFormaApiWebComponent } from './cruds/Transformaciones/busca-tforma-api-web/busca-tforma-api-web.component';
import { ListadoTFormaApiWebComponent } from './cruds/Transformaciones/listado-tforma-api-web/listado-tforma-api-web.component';
import { PrincipalComponent } from './principal/principal.component';

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

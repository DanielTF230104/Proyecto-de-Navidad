import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrudModule } from './ejercicios/ejercicio01/crud.module';
import { UsuariosPrincipalComponent } from './ejercicios/usuarios/usuarios-principal/usuarios-principal.component';
import { ListadoUsuariosComponent } from './ejercicios/usuarios/listado-usuarios/listado-usuarios.component';
import { FormularioUsuarioComponent } from './ejercicios/usuarios/formulario-usuario/formulario-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    UsuariosPrincipalComponent,
    ListadoUsuariosComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NavComponent,
    CrudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

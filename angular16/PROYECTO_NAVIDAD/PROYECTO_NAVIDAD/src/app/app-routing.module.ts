import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PrincipalComponent } from './ejercicios/ejercicio01/principal/principal.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { UsuariosPrincipalComponent } from './ejercicios/usuarios/usuarios-principal/usuarios-principal.component';

const routes: Routes = [
  {
    path: ''
    , redirectTo: 'login', pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'ejercicio01', component: PrincipalComponent, canActivate: [AuthGuard] },
  { path: 'ejercicio02', component: PrincipalComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { 
    path: 'usuarios', 
    component: UsuariosPrincipalComponent, 
    canActivate: [AuthGuard, AdminGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

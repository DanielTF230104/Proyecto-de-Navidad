import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'servicios', component: ServiciosComponent }
];


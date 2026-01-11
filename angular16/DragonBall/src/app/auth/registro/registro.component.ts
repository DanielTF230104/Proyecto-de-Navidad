import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombre = '';
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  registrar(): void {
    this.authService.registro(this.nombre, this.username, this.password);
    
    // Redirigir al login después de registro
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  username: string = '';
  password: string = '';
  imagenBase64: string = '';

  constructor(private authService: AuthService,     
              private router: Router) 
  { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenBase64 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  rol: string = 'usuario';

  registrar() {
    this.authService.registro(
        this.nombre, 
        this.username, 
        this.password, 
        this.imagenBase64,
        this.rol
    ).subscribe({
        next: (resp: any) => {
            console.log('Registro exitoso', resp);
            this.router.navigate(['/login']);
        },
        error: (err: any) => {
            console.error("Error al registrar:", err);
        }
    });
}
}
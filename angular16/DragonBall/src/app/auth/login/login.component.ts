import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  loginIncorrecto = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute // Inyectamos ActivatedRoute para leer parámetros de la URL

  ) { }

  hacerLogin(): void {
this.authService.login(this.username, this.password);    // Usamos el valor reactivo `isLoggedIn` para redirigir después del login

    if (this.authService.isLoggedIn()) {
      // Obtener la URL de retorno, si está presente
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/inicio';
      this.router.navigate([returnUrl]); // Redirigir al usuario a la URL que intentaba acceder
    } else {
      this.loginIncorrecto = true;
    }
  }
}

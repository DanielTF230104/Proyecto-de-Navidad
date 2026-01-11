import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';
  loginIncorrecto: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  
  ) { }

  hacerLogin(): void {
    this.authService.login(this.usuario, this.password);    
    if (this.authService.isLoggedIn()) {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/inicio';
      console.log(returnUrl);
      this.router.navigate([returnUrl]);
    } else {
      this.loginIncorrecto = true;
    }
  }
}

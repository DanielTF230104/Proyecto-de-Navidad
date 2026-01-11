import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  isLoggedIn = this.authService.isLoggedIn;
  usuario = this.authService.usuario;

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}

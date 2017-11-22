import { AuthService } from '../shared/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponentComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
}

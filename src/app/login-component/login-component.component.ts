import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../shared/auth.service'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponentComponent {
  email: string;
  password: string;
  success: boolean;
  constructor(public authService: AuthService) { }

  login() {
    if(this.authService.login(this.email, this.password)){
      this.email = this.password = '';
      this.success = true;
    }
    else{
      this.success = false;
    }
  }

  logout() {
    this.authService.logout();
  }

}

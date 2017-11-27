import { AuthService } from '../shared/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponentComponent {
  form: FormGroup;
  email: string;
  password: string;
  confirmpassword: string;

  constructor(public authService: AuthService, public router: Router) {

  }

  validate(){
    if(this.password == this.confirmpassword){
      this.signup();
    }
    else
      alert("Passwords don't match");
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    this.router.navigate(['edit']);
  }
}

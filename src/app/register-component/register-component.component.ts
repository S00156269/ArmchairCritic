import { AuthService } from '../shared/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

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
  uid: string;
  public invalid: boolean;
  constructor(public authService: AuthService, public afa: AngularFireAuth, public router: Router) {
    this.invalid = false;
  }

  validate() {
    if (this.password == this.confirmpassword) {
      this.invalid = false;
      this.signup();
    }
    else {
      this.invalid = true;
    }
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    this.router.navigate(['editprofile']);
  }
}

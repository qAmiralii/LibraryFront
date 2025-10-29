import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../../shared/auth.service';
import { Login } from '../model/login';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  auth = inject(AuthService);
  rout = inject(Router);
  message: string = '';
  busy = false;
  check() {
    this.busy = true;
    if (this.auth.check(this.userLogin.username, this.userLogin.password)) {
      this.rout.navigateByUrl('/admin')
    } else {
      this.message="ورود ناموفق"
    }
    this.busy = false;
  }
  userLogin: Login = { username: '', password: '', keepMe: false }
  login() {
    this.rout.navigateByUrl("/admin")
  }


}

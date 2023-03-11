import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth:AuthService ,private router:Router){}

  username: string = '';
  password: string = '';
  login() {
    this.auth.login(this.username, this.password);
    this.router.navigate(['/products']);
  }

}

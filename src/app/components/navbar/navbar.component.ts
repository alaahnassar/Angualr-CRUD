import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private auth:AuthService){}
  get getname() {
    return this.auth.user?.name;
  }

  get isLogin() {
    return this.auth.isLogin;
  }

  logout() {
    this.auth.logout();
  }

}

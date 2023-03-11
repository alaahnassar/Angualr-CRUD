import { Auth } from './../models/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user:Auth |undefined
  constructor() { }

  login(name:string,password:string){
    this.user={
      name:name,
      password:password
    }
  }
  get isLogin(): boolean{
    if(this.user?.name && this.user.password){
      return true
    }else{
      return false
      
    }
  }
  logout(){
    this.user=undefined
  }
}

import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
// import { LoginService } from './login.service';
@Injectable()
export class AuthService {

  constructor() {

  }

  canActivate() {
    return false;
    // return this.loginService.isLoggedIn();
  }
}

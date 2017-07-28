import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  isLoggedIn():any{
    return true;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    if(sessionStorage.getItem('email') === 'odutta@gmail.com' && sessionStorage.getItem('password') === '123') {
      console.log("Authenticated");
      return true;
    } else {
      window.confirm("The credentials are incorrect. Please try again!");
      return false;
    }
  }
}

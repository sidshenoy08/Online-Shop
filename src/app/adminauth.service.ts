import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  isLoggedIn() {
    if(sessionStorage.getItem("adminid") === "A101" && sessionStorage.getItem("password") === "root") {
      return true;
    } else {
      window.confirm("The credentials are incorrect. Please try again!");
      return false;
    }
  }
}

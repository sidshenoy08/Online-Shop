import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorauthService {

  constructor() { }

  isLoggedIn () {
    if(sessionStorage.getItem("vendorid") === "V101" && sessionStorage.getItem("password") === "vroot") {
      return true;
    } else {
      return false;
    }
  }
}

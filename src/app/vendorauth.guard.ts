import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VendorauthService } from './vendorauth.service';

@Injectable({
  providedIn: 'root'
})
export class VendorauthGuard implements CanActivate {
  constructor(public authService: VendorauthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggedIn()) {
      return true;
    } else {
      window.confirm("The credentials are incorrect. Please try again!");
      return false;
    }
  }
  
}

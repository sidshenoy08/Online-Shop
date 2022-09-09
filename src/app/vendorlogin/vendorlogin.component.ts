import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: any) {
    sessionStorage.setItem("vendorid", loginForm.value.vendorid);
    sessionStorage.setItem("password", loginForm.value.password);
    this.router.navigate(["vendor-products"]);
  }

}

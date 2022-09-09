import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: any) {
    sessionStorage.setItem("adminid", loginForm.value.adminid);
    sessionStorage.setItem("password", loginForm.value.password);
    this.router.navigate(["admin-home"]);
  }
}

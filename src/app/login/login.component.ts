import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: any) {
    sessionStorage.setItem("email", loginForm.value.email);
    sessionStorage.setItem("password", loginForm.value.password);
    this.router.navigate(["home"]);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(registerForm: any): void {
    if(registerForm.value.password === registerForm.value.cpassword) {
      sessionStorage.setItem("email", registerForm.value.email);
      sessionStorage.setItem("password", registerForm.value.password);
      this.router.navigate(["login"]);
    } else {
      window.confirm("The two passwords do not match. Please try again!");
    }
  }

}

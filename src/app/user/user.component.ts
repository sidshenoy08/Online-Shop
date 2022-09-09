import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  service: UserService;

  constructor(service: UserService, private router: Router) {
    this.service = service;
  }

  users: User[]=[];

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

  delete(id:number){
    this.service.delete(id);
    this.users = this.service.getUsers();
  }

  column: string = "id";
  order: boolean = true;

  sort(column:string){
    if(this.column==column )
    {
      this.order=!this.order;
    }else{
      this.order=true;
      this.column=column;
    }
  }

  onLogout() {
    sessionStorage.clear();
    this.router.navigate([""]);
  }
}

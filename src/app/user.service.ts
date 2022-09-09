import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;


  users: User[]=[];
  constructor(http:HttpClient){
     this.http=http;
     this.fetchUsers();
  }

  fetched:boolean=false;

  private fetchUsers(){
      this.http.get('./assets/users.json').subscribe(
        data=>{
          if(!this.fetched){  
          this.convert(data);
          this.fetched=true;
          }
        });
      
     }
   
  getUsers():User[]{
    return this.users;
  }

 convert(data:any){
  for(let o of data){
    let e=new User(o.id, o.email, o.name);
    this.users.push(e);
  }
}

delete(eid: number){
  let foundIndex:number=-1;
  for(let i=0;i<this.users.length;i++){
     let e=this.users[i];
      if(eid==e.id){
      foundIndex=i ;
      break;
   }
  }
  this.users.splice(foundIndex,1);  
}

add(e:User) {
  this.users.push(e);
  }
}

export class User{
  static COLUMNS=['id', 'email','name'];
  id: number
  email: string;
  name: string;
  constructor(id: number, email: string, name: string){
  this.id = id;
  this.email = email;
  this.name = name;
  }
}


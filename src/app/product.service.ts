import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService{

  http:HttpClient;
  products: Product[] = [];

 constructor(http:HttpClient){
     this.http=http;
     this.fetchProducts();
    }

 fetched:boolean=false;

  private fetchProducts(){
      this.http.get('./assets/products.json').subscribe(
        data=>{
          if(!this.fetched){  
          this.convert(data);
          this.fetched=true;
          }
        });
      
     }
   
     getProducts():Product[]{
         return this.products;
     }

 convert(data:any){
  for(let o of data){
    let e=new Product(o.id,o.name,o.quantity);
    this.products.push(e);
  }   

}

delete(eid:number){
  let foundIndex:number=-1;
  for(let i=0;i<this.products.length;i++){
     let e=this.products[i];
      if(eid==e.id){
      foundIndex=i ;
      break;
   }
  }
  this.products.splice(foundIndex,1);  
}
}

export class Product{
  static COLUMNS=['id', 'name','quantity'];
  id: number
  name: string;
  quantity: number;
  constructor(id: number, name: string, quantity: number){
  this.id = id;
  this.name = name;
  this.quantity = quantity;
  }
}
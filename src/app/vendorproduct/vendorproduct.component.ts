import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-vendorproduct',
  templateUrl: './vendorproduct.component.html',
  styleUrls: ['./vendorproduct.component.css']
})
export class VendorproductComponent implements OnInit {

  service: ProductService;

  constructor(service: ProductService, private router: Router) {
    this.service = service;
  }

  products: Product[]=[];

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  delete(id:number){
    this.service.delete(id);
    this.products = this.service.getProducts();
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

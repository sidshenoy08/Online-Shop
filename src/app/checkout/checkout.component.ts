import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  data: any;
  sum = 0;
  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.data);
  }

  ngOnInit(): void {
     for(let e in this.data) {
      console.log(this.data[e].price);
      this.data[e].total = parseFloat(this.data[e].price.slice(0,-1)) * this.data[e].qty;
      this.sum = this.sum + this.data[e].total;
    }
  }

  onLogout() {
    sessionStorage.clear();
    this.router.navigate([""]);
  }

}

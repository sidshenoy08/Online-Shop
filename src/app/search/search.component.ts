import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  item: any;
  items: any[] =[];
  constructor(private router: Router) {
    this.item = this.router.getCurrentNavigation()?.extras.state;
    this.items.push(this.item);
  }

  ngOnInit(): void {
  }

  onSubmit(purchaseForm: any) {
    this.items[0].qty = purchaseForm.value[0]; 
    this.router.navigateByUrl('checkout', {state: this.items});
  }

  onLogout() {
    sessionStorage.clear();
    this.router.navigate([""]);
  }

}

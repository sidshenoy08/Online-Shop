import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { ReplaySubject, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any;
  searchedItem: any;
  constructor(private router: Router) {
    this.items = 
  [
    {
      "id": 0,
      "name": "Shoes",
      "src": "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "price": "5$" 
 },
{
      "id": 1,
      "name": "Men's T-Shirt",
      "src": "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": "6.34$" 
 },
{
      "id": 2,
      "name": "Jeans",
      "src": "https://media.istockphoto.com/photos/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-picture-id1281304280",
      "price": "9$" 
 },
{
      "id": 3,
      "name": "Watch",
      "src": "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "price": "9.1$" 
 },
{
      "id": 4,
      "name": "Smart Phone",
      "src": "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "price": "20$" 
 },
{
      "id": 5,
      "name": "Television",
      "src": "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "price": "18$" 
 },
{
      "id": 6,
      "name": "Hoodies",
      "src": "https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": "6.7$" 
 },
{
      "id": 7,
      "name": "Dinner Set",
      "src":"https://media.istockphoto.com/photos/vintage-plates-with-silver-teaspoons-picture-id184363070",
      "price": "10$" 
 },
{
      "id": 8,
      "name": "Blanket",
      "src": "https://images.pexels.com/photos/6463348/pexels-photo-6463348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": "9.9$" 
 },
{
      "id": 9,
      "name": "Laptop",
      "src": "https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": "99$" 
 },
{
      "id": 10,
      "name": "Microwave",
      "src": "https://media.istockphoto.com/photos/modern-kitchen-microwave-oven-picture-id1144960519",
      "price": "30$" 
 },
{
      "id": 11,
      "name": "Coffee Maker",
      "src": "https://media.istockphoto.com/photos/black-coffee-maker-with-green-led-lights-picture-id177395430" ,
      "price": "29.7$" 
 },
{
      "id": 12,
      "name": "Bed",
      "src": "https://images.pexels.com/photos/6606354/pexels-photo-6606354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "price": "100$" 
 },
{
      "id": 13,
      "name": "Air Conditioner",
      "src": "https://media.istockphoto.com/photos/woman-turning-on-air-conditioner-picture-id1325708905" ,
      "price": "78$" 
 },
{
      "id": 14,
      "name": "Bag",
      "src": "https://images.pexels.com/photos/4339598/pexels-photo-4339598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
      "price": "36.5$" 
 },
{
      "id": 15,
      "name": "Sarees",
      "src": "https://media.istockphoto.com/photos/hand-of-a-lady-selecting-yellow-colored-saree-in-a-shop-picture-id1301740530",
      "price": "25.6$" 
 },
{
      "id": 16,
      "name": "Washing Machine",
      "src": "https://images.pexels.com/photos/5816934/pexels-photo-5816934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "price": "56$" 
 },

  ]
  }

  
  

  ngOnInit(): void {
  }

  searchProducts(searchForm: any) {
     for(let i = 0; i < this.items.length; i++) {
          if(searchForm.value.product === this.items[i].name) {
               this.searchedItem = this.items[i];
               break;
          }
     }
     this.router.navigateByUrl('search', {state: this.searchedItem});
  }

  onSubmit(purchaseForm: any) {
    let temp = [];
    for(let key in purchaseForm.value) {
      if(purchaseForm.value[key]){
        // console.log("ID: "+ key)
        // console.log(this.items[key])
        // console.log("Quantity "+purchaseForm.value[key])
        this.items[key].qty=purchaseForm.value[key]
     //    console.log(this.items[key])
        temp.push(this.items[key])
      }
    }
    this.router.navigateByUrl('checkout',{state:temp});
  }

  onLogout() {
    sessionStorage.clear();
    this.router.navigate([""]);
  }
}

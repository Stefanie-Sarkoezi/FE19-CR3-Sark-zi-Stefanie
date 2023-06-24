import { Injectable } from '@angular/core';
import { IProducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProducts[] = [];

  constructor() { }
  addToCart (obj: IProducts){
    this.cart.push(obj);
  }

  getCart(){
    return this.cart;
  }

  clearCart () {
    this.cart = [];
    return this.cart;
  }
  calculateSubtotal(){
    let subtotal:number = 0;
    for(let val of this.cart){
      subtotal += val.prize;
    }
    return subtotal;
  }
  calculateVAT(){
    let vat:number = this.calculateSubtotal()/100*10;
    return vat;
  }
  calculateDiscount(){
    let discount:number = 0;
    if(this.calculateSubtotal() > 40){
      discount = this.calculateSubtotal()/100*15;
    }
    return discount;
  }
  calculateTotal(){
    let total:number = this.calculateSubtotal()+this.calculateVAT()-this.calculateDiscount();
    return total;
  }
}

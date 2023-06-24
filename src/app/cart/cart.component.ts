import { Component, OnInit } from '@angular/core';
import { IProducts } from '../Iproducts';
import { CartService } from '../cart.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: IProducts[] = [];
  subtotal:number =0;
  vat:number =0;
  discount:number =0;
  total:number =0;

  constructor(private cartService : CartService){}

  orderForm=new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required)
  });
  OnSubmit(){
    if(this.orderForm.valid){
      var info = this.orderForm.value;
      console.log(info);
    }
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.subtotal = this.cartService.calculateSubtotal();
    this.vat = this.cartService.calculateVAT();
    this.discount = this.cartService.calculateDiscount();
    this.total = this.cartService.calculateTotal();
  }


}

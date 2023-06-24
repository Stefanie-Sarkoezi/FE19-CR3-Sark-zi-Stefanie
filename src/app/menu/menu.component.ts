import { Component, OnInit } from '@angular/core';
import { IProducts } from '../Iproducts';
import { products } from '../products';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
  product : IProducts = {} as IProducts;

  products: Array<IProducts> = products;

  constructor (private cardService: CartService){

  }

  addToCart(obj:IProducts){
    alert ("Added to the cart!");
    this.cardService.addToCart(obj);
  }

}

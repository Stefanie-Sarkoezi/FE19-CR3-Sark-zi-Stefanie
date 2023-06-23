import { Component } from '@angular/core';
import { IProducts } from '../Iproducts';
import { products } from '../products';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  products: Array<IProducts> = products;

}

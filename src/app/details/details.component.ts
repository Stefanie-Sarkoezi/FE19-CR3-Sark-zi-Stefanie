import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProducts } from '../Iproducts';
import { products } from '../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  product : IProducts = {} as IProducts;
  index : number = 0;

  constructor (private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.index = Number(params["id"]);
      this.product = products[this.index]
    })
  }


}

import { EventEmitter, Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  toggle : EventEmitter<boolean> = new EventEmitter<boolean>();
  productCount : any =0;
  cartproduct:IProduct[]=[];
  total_price:number =0;

  totalprice(productID: any){
    this.cartproduct.map((product) => {
      if (product.id === productID) {
     this.total_price=+product.price + this.total_price;

  }
})

   }
  constructor() { }



}

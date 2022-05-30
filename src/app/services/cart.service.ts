import { EventEmitter, Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  productCount: any = 0;
  productsselect: IProduct[] = [];
  productfilter:IProduct[]=this.productsselect;
  cartproduct: IProduct[] = [];
  total_price: number = 0;
  searchBox: string ='';




  search(value: string): void {
    if(value==''){
      this.productfilter=this.productsselect;
    }else{

      this.productfilter = this.productsselect.filter((val) =>
      val.title.toLowerCase().includes(value)
      );
    }

  }



  buy(product: IProduct) {



    let found: boolean = false;
    this.cartproduct = this.cartproduct.map((ci) => {
      if (ci?.id == product?.id) {
        ci.countorder++;
        found = true;
      }
      return ci;
    });

    if (!found) {
      this.cartproduct.push(product);
      this.productCount++;
    }
    //  this.cartproduct.push(product);
    //  product.countorder=0;

    this.totalprice();

  }
  totalprice() {
    this.total_price = this.cartproduct.reduce((a, b) => {
      a = a + b?.price * b.countorder;
      return a;
    }, 0);
    // return sum;
  }
  removeItems(item: IProduct) {
    const index = this.cartproduct.indexOf(item, 0);
    this.total_price =this.total_price -(item.price * item.countorder);
    this.productsselect.map((product)=>{
      if(item.id==product.id){
        product.countorder+=item.countorder;
      }
    })

    if (index > -1) {
      this.cartproduct.splice(index, 1);
    }
    this.productCount--;
  }

  emptyCart() {
    this.cartproduct = [];

  }
  isCartValid(): boolean {
    if (
      this.cartproduct.find(
        (cartitem) => cartitem.countorder == null || cartitem.countorder <= 0
      ) === undefined
    )
      return false;
    return true;
  }

  constructor() {


  }
}

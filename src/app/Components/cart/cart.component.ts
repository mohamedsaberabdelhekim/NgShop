import { Component,  OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {




  removeItems(item: IProduct) {
    const index = this.myService.cartproduct.indexOf(item, 0);
    this.myService.total_price =this.myService.total_price -(item.price * item.countorder);

    if (index > -1) {
      this.myService.cartproduct.splice(index, 1);
    }
    this.myService.productsselect.map((product)=>{
      if(item.id==product.id){
        product.countorder+=item.countorder;
        this.myService.productsselect.push(product);
      }
    })
    this.myService.productCount--;
    console.log(this.myService.cartproduct);
  }













  openCart:boolean = true;
  Status : boolean = false;
  constructor(public myService : CartService) {
   }

  ngOnInit(): void {
    this.myService.toggle.subscribe(status=>this.Status = status);
  }
  togglecart(){
    this.myService.toggle.emit(this.Status);
  }

  // removeItem(productID: any){
  //   this.myService.cartproduct.map((product) => {
  //     if (product.id === productID) {

  //       this.myService.productCount--;
  //       this.myService.total_price =this.myService.total_price -product.price;

  //       const index=this.myService.cartproduct.indexOf(product);
  //       this.myService.cartproduct.splice(index,1);
  //     }
  //   }



  //   );

  //   console.log( this.myService.cartproduct);

  // }

  increasingcount(productID: any) {
    this.myService.cartproduct.map((product) => {
      if (product.id === productID) {
        // product.rating.count--;
        product.countorder++;
        // this.countsingleproduct++;
      }

    });
    this.myService.totalprice();
  }
  decreasingcount(productID: any) {
    this.myService.cartproduct.map((product) => {
      if (product.id === productID) {
        // product.rating.count--;
        if (product.countorder > 0) {
          product.countorder--;
        }
        // this.countsingleproduct++;
      }
    });
    this.myService.totalprice();
  }


  ngOnChanges(){


  }

}



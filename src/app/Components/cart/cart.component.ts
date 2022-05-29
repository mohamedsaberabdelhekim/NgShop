import { Component,  OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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

  removeItem(productID: any){
    this.myService.cartproduct.map((product) => {
      if (product.id === productID) {

        this.myService.productCount--;
        this.myService.total_price =this.myService.total_price -product.price;

        const index=this.myService.cartproduct.indexOf(product);
        this.myService.cartproduct.splice(index,1);
      }
    }



    );

    console.log( this.myService.cartproduct);

  }


  ngOnChanges(){


  }

}



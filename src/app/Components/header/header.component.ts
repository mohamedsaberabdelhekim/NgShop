import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { StoreData } from 'src/app/Views/store-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // cartOpen:boolean = true;
  // isOpen:boolean = false;
  term = '';
  searchTerm = '';
  Status : boolean = false;
  storeData:StoreData;
  constructor(public myService : CartService) {
    this.storeData=new StoreData("NgShop",['assuit'],'./')
  }
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  togglecart(){
    // this.cartOpen = !this.cartOpen;
    this.myService.toggle.emit(!this.Status);


  }



  ngOnInit(): void {
    this.myService.toggle.subscribe(status=>this.Status = status);
    this.myService.searchBox=this.term;
  }


}

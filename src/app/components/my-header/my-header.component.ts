import { Component, OnInit } from '@angular/core';
import { UserInfo,PageInfoService,ShopCart,Products,ShopItems } from '../../app.component';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']  
})
export class MyHeaderComponent implements OnInit {
    
  constructor(private pageInfoService: PageInfoService,private userInfo:UserInfo,private shopCartItems:ShopCart,private shopItem:ShopItems) {
  }

  ngOnInit() {
  }

  addToCart(shopItem:ShopItems){
    this.shopItem= shopItem;
    if(this.shopCartItems.shopItems.indexOf(this.shopItem) != -1){
      this.shopCartItems.shopItems.splice(this.shopCartItems.shopItems.indexOf(shopItem),1);
      this.shopItem.num = this.shopItem.num+1;
      this.shopCartItems.shopItems.push(this.shopItem);
    }
  }

  DeletefromShoppingCart(shopItem:ShopItems){

  }
  deleteFromCart(shopItem:ShopItems)
  {

  }

  // deleteFromCart(product){
  //   if(this.shopCartItems.products.indexOf(product) != -1){
  //     this.shopCartItems.products.splice(this.shopCartItems.products.indexOf(product),1);
  //     this.shopCartItems.products.find(product).num =   this.shopCartItems.products.find(product).num-1;    
  //   }
    

  onClick_Logout() {
    this.userInfo.token = "";
    this.pageInfoService.isShowSignin = true;    
    this.pageInfoService.isShowSignout = false;
    this.pageInfoService.isShowProducts = false;   
  }

}

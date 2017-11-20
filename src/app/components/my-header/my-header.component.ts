import { Component, OnInit } from '@angular/core';
import { UserInfo, PageInfoService, ShopCartItem, Products, ShopItems } from '../../app.component';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {

  constructor(
    private pageInfoService: PageInfoService,
    private userInfo: UserInfo,
    private shopCartItems: ShopCartItem,
    private shopItem: ShopItems) {
  }

  ngOnInit() {
  }

  addToShopCart(shopItem: ShopItems) {
    for (let item of this.shopCartItems.shopCartItems) {
      if (item.name == shopItem.name) {
        item.price += (item.price / item.num);
        item.num += 1;
        break;
      }
    }
  }

  reduceFromShopCart(shopItem: ShopItems) {
    for (let item of this.shopCartItems.shopCartItems) {
      if (item.name == shopItem.name) {
        if (item.num - 1 == 0)
          this.shopCartItems.shopCartItems.splice(this.shopCartItems.shopCartItems.indexOf(shopItem), 1)
        else
          {
            item.price -= item.price/item.num;
            item.num -= 1;
          }
        break;
      }
    }
  }

  DeletefromShopCart(shopItem: ShopItems) {
    for (let item of this.shopCartItems.shopCartItems) {
      this.shopCartItems.shopCartItems.splice(this.shopCartItems.shopCartItems.indexOf(shopItem), 1);
    }
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

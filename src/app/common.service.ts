// import { Injectable } from '@angular/core';
// import { PageLoginComponent } from './components/page-login/page-login.component';
// import { PageHomeComponent } from './components/page-home/page-home.component';
// import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
// import { MyHeaderComponent } from './components/my-header/my-header.component';

// @Injectable()
// export class CommonService {

//   constructor() { }

//   get isShowProducts(): boolean {
//     if (!sessionStorage["LoginUserInfo"]) return false;
//     return JSON.parse(sessionStorage["LoginUserInfo"]) != null;
//   }

//   get loginUserInfo():  PageLoginComponent{
//     return JSON.parse(sessionStorage["LoginUserInfo"]) as UserInfo;
//   }

//   set loginUserInfo(value: PageLoginComponent) {
//     sessionStorage.setItem("LoginUserInfo", JSON.stringify(value));
//   }

//   get ShoppingCart(): ShoppingCartComponent{
//     return ShoppingCart.deserialize(sessionStorage["ShoppingCart"]);
//   }

//   set ShoppingCart(value: ShoppingCartComponent) {
//       sessionStorage.setItem("ShoppingCart", ShoppingCart.serialize(value));
//   }
// }

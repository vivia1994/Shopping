import { Component,Injectable } from '@angular/core';

// export const UserInfo = {
//   token: "",
// }
@Injectable()
export class UserInfo  {
  username: string;
  status :string;
  token: string;
}
// export const PageInfo = {
//   isShowShopCart:true,
//   isShowProducts:true
// }
@Injectable()
export class PageInfoService{
  isShowShopCart:boolean;
  isShowProducts:boolean;  
  isShowSignin:boolean;  
  isShowSignout:boolean;
  constructor() {
    this.isShowProducts = false;
    this.isShowSignin = true;
    this.isShowSignout = false;
   }
}


export class Products{
  name:string;
  price: number;  
  description: string;
  imgurl: string;
}

export class ShopItems {
  name:string;
  price: number;  
  num:number;
}

export class ShopCartItem{

  shopCartItems:Array<ShopItems>;  
    
  constructor(){
    this.shopCartItems = new Array<ShopItems>();
  }

  // push(product:Products){
  //   let object = this.products;
  //   object.push(product);
  //   this.products = object;
  // }

  // reduce(product:Products){
  //   let object = this.products;
  //   object.pop(product);
  //   this.products = object;
  // }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';



  onClick_HeaderBar(value) {
    console.log('onClick_HeaderBar', value);
  }
}

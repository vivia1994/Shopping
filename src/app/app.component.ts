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

export const ButtonState={

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

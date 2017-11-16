import { Component,Injectable } from '@angular/core';

// export const UserInfo = {
//   token: "",
// }
export const UserInfo = {
  username: "",
  status :"",
  token: "",
  isShowSignin:true,
  isShowSignout:true
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
    this.isShowSignin = true;
    this.isShowSignout = false;
   }
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

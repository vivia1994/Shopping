import { Component } from '@angular/core';

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
export class PageInfoService{
  isShowShopCart:boolean;
  isShowProducts:boolean;
  constructor() { }
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

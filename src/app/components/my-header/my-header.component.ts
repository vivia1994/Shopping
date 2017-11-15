import { Component, OnInit } from '@angular/core';
import { UserInfo,ButtonState} from '../../app.component';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {

  isShowSignin
  isShowSignout

  constructor() {
    this.isShowSignin = ButtonState.isShowSignin,
    this.isShowSignout = ButtonState.isShowSignout
   }

  ngOnInit() {
  }
  onClick_Logout(){
    UserInfo.token="";
    ButtonState.isShowSignout = false;
  }
}

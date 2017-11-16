import { Component, OnInit } from '@angular/core';
import { UserInfo, ButtonState } from '../../app.component';
import { PageInfoService } from '../../app.component';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']  
})
export class MyHeaderComponent implements OnInit {
  isShowSignin;
  isShowSignout;
  isShowProducts1 :boolean;
  childNameForInject: string;
  
  constructor(private pageInfoService: PageInfoService) {
    this.isShowSignin = UserInfo.isShowSignin;
    this.isShowSignout = UserInfo.isShowSignout;  
    this.isShowProducts1 = false;
  }

  ngOnInit() {
  }

  onClick_Logout() {
    UserInfo.token = "";
    UserInfo.isShowSignin = true;
    this.isShowSignin =UserInfo.isShowSignin;
    UserInfo.isShowSignout = true;
    this.isShowSignout =UserInfo.isShowSignout;
    this.pageInfoService.isShowProducts = false;   
    this.isShowProducts1 = false;  
  }

}

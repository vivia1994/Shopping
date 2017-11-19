import { Component, OnInit } from '@angular/core';
import { UserInfo, ButtonState } from '../../app.component';
import { PageInfoService } from '../../app.component';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']  
})
export class MyHeaderComponent implements OnInit {
  
  constructor(private pageInfoService: PageInfoService,private userInfo:UserInfo ) {

  }

  ngOnInit() {
  }

  onClick_Logout() {
    this.userInfo.token = "";
    this.pageInfoService.isShowSignin = true;    
    this.pageInfoService.isShowSignout = false;
    this.pageInfoService.isShowProducts = false;   
  }

}

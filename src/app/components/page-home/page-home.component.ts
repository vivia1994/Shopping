import { Component, OnInit,Input } from '@angular/core';
import { UserInfo } from '../../app.component';
import { PageInfoService } from '../../app.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  
})
export class PageHomeComponent implements OnInit {
  @Input() public xxx1: boolean ;  
  xxx
  constructor(private pageInfoService: PageInfoService) {
    this.xxx = this.pageInfoService.isShowProducts;
    this.pageInfoService.isShowProducts = this.xxx1;
    this.xxx = this.pageInfoService.isShowProducts;
  }

  ngOnInit() {
  }
  AlertToken() {
    alert(this.xxx);
    //alert(UserInfo.isShowSignin + "  " + UserInfo.isShowSignout);
    //alert(UserInfo.token);
  }
}

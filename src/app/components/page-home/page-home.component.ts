import { Component, OnInit,Input } from '@angular/core';
import { UserInfo } from '../../app.component';
import { PageInfoService } from '../../app.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  
})
export class PageHomeComponent implements OnInit {
  constructor(private pageInfoService: PageInfoService) {
  }

  ngOnInit() {
  }
  AlertToken() {
    alert(this.pageInfoService.isShowProducts);
  }
}

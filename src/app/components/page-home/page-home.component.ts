import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../app.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  AlertToken() {
    alert(UserInfo.token);
  }
}

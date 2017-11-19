import { Component, OnInit, Input } from '@angular/core';
import { UserInfo, PageInfoService, Products } from '../../app.component';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { Promise } from 'bluebird';



@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],

})
export class PageHomeComponent implements OnInit {
  products: Array<Products>;
  constructor(private pageInfoService: PageInfoService, private http: Http, private userInfo: UserInfo) {
  }

  ngOnInit() {
    if (this.pageInfoService.isShowProducts) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('RequestVerificationToken', this.userInfo.token);
      let options = new RequestOptions({ headers: headers });
      return new Promise((resolve, reject) => {
        this.http
          .get("https://pwcfrontendtest.azurewebsites.net/getlist", options)
          .subscribe(
          data => {
            this.products = data.json().res;
            resolve(this.products);
          });
      })
    }
  }

  AlertToken() {
    alert("token__  " + this.pageInfoService.isShowProducts + "__" + this.userInfo.token);
  }
}

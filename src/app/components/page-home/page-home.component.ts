import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { Promise } from 'bluebird';
import { UserInfo, PageInfoService, Products, ShopItems, ShopCartItem } from '../../app.component';



@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],

})
export class PageHomeComponent implements OnInit {
  products: Array<Products>;
  constructor(private pageInfoService: PageInfoService,
    private http: Http,
    private userInfo: UserInfo,
    private shopCartItems: ShopCartItem    ,
    private shopItems: ShopItems) {
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
          dataJson => {
            this.products = dataJson.json().res;
            resolve(this.products);
          });
      })
    }
  }

  addToShopCart(product: Products) {
    let totalPriceTemp = 0;
    let newItem = new ShopItems();
    let isFound = false;
    for (let item of this.shopCartItems.shopCartItems) {
      if (item.name == product.name) {
        item.num += 1;
        item.price += product.price;
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      newItem.name = product.name;
      newItem.price = product.price;
      newItem.num = 1;
      this.shopCartItems.shopCartItems.push(newItem);
    }
    for (let item of this.shopCartItems.shopCartItems) {
      totalPriceTemp += item.price;
    }
    this.shopItems.totalPrice = totalPriceTemp;
    for (let item of this.shopCartItems.shopCartItems) {
       item.totalPrice= totalPriceTemp;
    }
  }



  AlertToken() {
    alert("token__  " + this.pageInfoService.isShowProducts + "__" + this.userInfo.token);
  }
}

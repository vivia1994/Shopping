import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { Promise } from 'bluebird';
import { UserInfo, PageInfoService, Products, ShopItems, ShopCart } from '../../app.component';



@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],

})
export class PageHomeComponent implements OnInit {
  products: Array<Products>;
  constructor(private pageInfoService: PageInfoService, private http: Http, private userInfo: UserInfo, private shopCartItems: ShopCart, private shopItems: ShopItems) {
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

  addToCart(product: Products) {
    console.log("0------------");
    
    this.shopItems.name = product.name;
    if(this.shopCartItems.shopItems == undefined){
      console.log("1------------");
      this.shopItems.name = product.name;
      this.shopItems.price = product.price;
      this.shopItems.num = 1;
      this.shopCartItems.shopItems.push(this.shopItems);
      console.log("1------------1");
      
    }
    else if (this.shopCartItems.shopItems.length == 0) {
      console.log("2------------");
      this.shopItems.name = product.name;
      this.shopItems.price = product.price;
      this.shopItems.num = 1;
      this.shopCartItems.shopItems.push(this.shopItems);
      alert("1___" + product.name + "__" + product.price + "__" + this.shopCartItems.shopItems.length);
    }
    else {
      console.log("3------------");
      
      let i = 1;
      for (var item of this.shopCartItems.shopItems) {
        if (item.name = product.name) {
          console.log("4------------");
          
          this.shopCartItems.shopItems.splice(this.shopCartItems.shopItems.indexOf(item), 1);
          this.shopItems.num = this.shopItems.num + 1;
          this.shopItems.price = this.shopItems.price + product.price;
          this.shopCartItems.shopItems.push(this.shopItems);
          alert("2___" + product.name + "__" + product.price + "__" + this.shopCartItems.shopItems.length);
          break;
        }
        else if (i = this.shopCartItems.shopItems.length) {
          console.log("5------------");
          
          this.shopItems.name = product.name;
          this.shopItems.price = product.price;
          this.shopItems.num = 1;
          this.shopCartItems.shopItems.push(this.shopItems);
          alert("3___" + product.name + "__" + product.price + "__" + this.shopCartItems.shopItems.length);
        }
        i = i + 1;
      }
    }

  }

  AlertToken() {
    alert("token__  " + this.pageInfoService.isShowProducts + "__" + this.userInfo.token);
  }
}

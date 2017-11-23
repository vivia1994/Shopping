import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { Promise } from 'bluebird';
import { UserInfo, PageInfoService, Products, ShopItems, ShopCartItem } from '../../app.component';

import { ViewChild, AfterViewInit} from "@angular/core";
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],

})
export class PageHomeComponent implements OnInit {

  @ViewChild(KSSwiperContainer)
  swiperContainer:KSSwiperContainer;

  images:Array<string>;
  // 配置
  swipeOptions:any;
  
  slideIndex: number;
  products: Array<Products>;
  
  constructor(private pageInfoService: PageInfoService,
    private http: Http,
    private userInfo: UserInfo,
    private shopCartItems: ShopCartItem,
    private shopItems: ShopItems) {

      this.swipeOptions = {
        // 每页显示几张图片
        slidesPerView: 4,
        // 是否循环
        loop: false,
        spaceBetween: 5
      };
      this.images = ["rs-1", "rs-2","rs-3","rs-4","rs-5","rs-6"];
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }
  movePrev() {
    this.swiperContainer.swiper.slidePrev();
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
  }



  AlertToken() {
    alert("token__  " + this.pageInfoService.isShowProducts + "__" + this.userInfo.token);
  }


}

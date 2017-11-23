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
  slideIndex: number;
  isSlideShow: boolean[] = [true, false, false];
  products: Array<Products>;
  constructor(private pageInfoService: PageInfoService,
    private http: Http,
    private userInfo: UserInfo,
    private shopCartItems: ShopCartItem,
    private shopItems: ShopItems) {

    this.slideIndex = 0;
    this.showSlides();

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
    var xxxx = document.getElementsByClassName("mySlides");
    console.log("xxxx_____" + xxxx.length);
  }

  showSlides() {
    console.log("----------------------");
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log("mySlides__" + document.getElementsByClassName("mySlides").length);
    if (slides.length != 0) {
      for (i = 0; i < slides.length; i++) {
        this.isSlideShow[i] = false;
        // slides[i].style.display = "none"; 
      }
      this.slideIndex++;
      if (this.slideIndex > slides.length) { this.slideIndex = 1 }
      this.isSlideShow[this.slideIndex - 1] = true;
      // slides[this.slideIndex-1].style.display = "block"; 
      setTimeout(this.showSlides, 2000); // Change image every 2 seconds
      for (let i = 0; i < this.isSlideShow.length; i++) {
        // console.log("i--------"+i+" "+this.isSlideShow[i]) ;     
      }
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

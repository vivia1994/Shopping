import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Jquery } from 'jquery';
import {CustomFormsModule} from "ng2-validation";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyHeaderComponent } from './components/my-header/my-header.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CONST_ROUTING } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageLoginComponent,
    PageHomeComponent,
    ShoppingCartComponent,
    MyHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CustomFormsModule,
    ReactiveFormsModule,
    CONST_ROUTING,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

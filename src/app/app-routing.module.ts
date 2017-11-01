import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { MyHeadComponent } from './components/my-head/my-head.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path:"**",
    component:PageHomeComponent
  },
  {
    path:"login",
    component:PageLoginComponent
  },
  {
    path: '',
    component:PageHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [MyFooterComponent, MyHeadComponent, PageLoginComponent, PageHomeComponent, ShoppingCartComponent]
})
export class AppRoutingModule { }

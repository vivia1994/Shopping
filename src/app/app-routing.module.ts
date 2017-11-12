import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';

const routes: Routes = [
  {
    path: "**",
    component: PageLoginComponent
  },
  {
    path: "login",
    component: PageLoginComponent
  },
  {
    path: '',
    component: PageHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [
  PageLoginComponent,
  PageHomeComponent,
  MyHeaderComponent,
  MyFooterComponent,
  ShoppingCartComponent
]
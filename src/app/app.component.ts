import { Component } from '@angular/core';

export const UserInfo = {
  token: ""
}
export const ButtonState={
  isShowSignin:  true,
  isShowSignout: false
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';



  onClick_HeaderBar(value) {
    console.log('onClick_HeaderBar', value);
  }
}

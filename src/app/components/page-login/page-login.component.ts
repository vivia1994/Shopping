
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { UserInfo,ButtonState} from '../../app.component';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})

export class PageLoginComponent implements OnInit {
  form: FormGroup;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
    this.form = new FormGroup({
      num: new FormControl('', CustomValidators.num),
      username: new FormControl('', CustomValidators.range([5, 9])),
      password: new FormControl('', CustomValidators.range([5, 9])),
    });
  }

  ngOnInit() {
  }
  onClick_Signin(username, password) {
    let body = JSON.stringify({
      username: username,
      psd: password
    });
    alert(username);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("https://pwcfrontendtest.azurewebsites.net/login", body, options).toPromise().then((response) => {
      if (response.json().status == "success") {
        UserInfo.token = response.json().token;
        this.router.navigate(['../home'], { relativeTo: this.route });
        console.log("onClick_Signin");
        // ButtonState.isShowSignin = ! ButtonState.isShowSignin;
        // ButtonState.isShowSignout = ! ButtonState.isShowSignout;
        // alert(UserInfo.token);
      }
      else {
        alert("Invalid user or wrong password!");        
        this.router.navigate(['../login'], { relativeTo: this.route });
      }
    });
  }
  AlertToken() {
    alert(UserInfo.token);
  }
}

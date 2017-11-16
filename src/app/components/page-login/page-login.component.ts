
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { UserInfo, ButtonState } from '../../app.component';
// import { ShowSignService } from '../../common.service';
import { PageInfoService } from '../../app.component';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})


export class PageLoginComponent implements OnInit {
  
  form: FormGroup;

  constructor(private http: Http, 
    private route: ActivatedRoute, 
    private router: Router,
    private pageInfoService: PageInfoService,
  ) {
    this.form = new FormGroup({
      num: new FormControl('', CustomValidators.num),
      username: new FormControl('', CustomValidators.range([5, 9])),
      password: new FormControl('', CustomValidators.range([5, 9])),
    });
    this.pageInfoService.isShowProducts = false;
  }

  ngOnInit() {
    //UserInfo.isShowSign = true;
  }

  onClick_Signin(username, password) {
    let body = JSON.stringify({
      username: username,
      psd: password
    });
    this.router.navigate(['../home'], { relativeTo: this.route });
    UserInfo.isShowSignout = true;
    UserInfo.isShowSignin = false;
    this.pageInfoService.isShowProducts = true;
    alert("vvvvvvv");
    }
    // this.isShowProducts1 = true;
    
    // console.log("onClick_Signin", username);
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    // this.http.post("https://pwcfrontendtest.azurewebsites.net/login", body, options).toPromise().then((response) => {
    //   if (response.json().status == "success") {
    //     alert(response.json().token);
    //     this.router.navigate(['../home'], { relativeTo: this.route });
    //     console.log("onClick_Signin");   
    //     UserInfo.isShowSign = false;
    //   }
    //   else {
    //     alert("Invalid user or wrong password!");
    //     this.router.navigate(['../login'], { relativeTo: this.route });
    //   }
    // });
  AlertToken() {
    // alert(UserInfo.isShowSignin+ "  " +UserInfo.isShowSignout);
    alert(UserInfo.token);
  }

}


import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { UserInfo } from '../../app.component';
// import { ShowSignService } from '../../common.service';
import { PageInfoService } from '../../app.component';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})


export class PageLoginComponent implements OnInit {
  
  form: FormGroup;
  strButton:string;

  constructor(private http: Http, 
    private route: ActivatedRoute, 
    private router: Router,
    private pageInfoService: PageInfoService,
    private userInfo:UserInfo
  ) {
    this.form = new FormGroup({
      num: new FormControl('', CustomValidators.num),
      username: new FormControl('', CustomValidators.range([5, 9])),
      password: new FormControl('', CustomValidators.range([5, 9])),
    });
    this.pageInfoService.isShowProducts = false;
    this.strButton = "Sign in";
  }

  ngOnInit() {
  }

  onClick_Signin(username, password) {
    this.strButton = "Signing in...";    
    let body = JSON.stringify({
      username: username,
      psd: password
    });    
    console.log("onClick_Signin", username);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("https://pwcfrontendtest.azurewebsites.net/login", body, options).toPromise().then((response) => {
      if (response.json().status == "success") {
        this.userInfo.status = response.json().status;
        this.userInfo.token =  response.json().token;
        this.userInfo.username = username;
        this.pageInfoService.isShowSignin = false;    
        this.pageInfoService.isShowSignout = true;
        this.pageInfoService.isShowProducts = true;
        //alert(response.json().token);
        this.router.navigate(['../home'], { relativeTo: this.route });
        console.log("onClick_Signin");   
      }
      else {
        this.strButton = "Sign in";        
        alert("Invalid user or wrong password!");
      }
    });
  }
    
  AlertToken() {
    // alert(UserInfo.isShowSignin+ "  " +UserInfo.isShowSignout);
    alert(this.userInfo.token);
  }

}

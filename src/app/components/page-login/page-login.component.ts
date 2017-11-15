
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { UserInfo } from '../../app.component';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})

export class PageLoginComponent implements OnInit {
  form: FormGroup;

  constructor(private http: Http) {
    this.form = new FormGroup({
      num: new FormControl('', CustomValidators.num),
      username: new FormControl('', CustomValidators.range([5, 9])),
      password: new FormControl('', CustomValidators.range([5, 9])),
    });
  }

  ngOnInit() {
  }
  onClick(username, password) {
    //alert(username+password);
    //be lazy
    alert(username+"  "+password);      
    
    let body = JSON.stringify({
      username: username,
      psd: password
    });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("https://pwcfrontendtest.azurewebsites.net/login", body, options).toPromise().then((response) => {
      alert("aaa");  
    if(response.json().status=="success") {
      UserInfo.token = response.json().token;  
      alert(UserInfo.token);      
    } 
    else{
      alert("Invalid user or wrong password!")
    }
    });
  }
}


import {Component,OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})

export class PageLoginComponent implements OnInit {
  // 3. 定义表单组
  form:FormGroup;
  constructor() {
        // 4. 初始化表达组里面的内容
        this.form = new FormGroup({
          num: new FormControl('', CustomValidators.num),      
          email: new FormControl('', CustomValidators.email),
        });
   }

  ngOnInit() {
  }

}

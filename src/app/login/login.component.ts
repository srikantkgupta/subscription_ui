import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private globalServiceService: GlobalServiceService) { }

  ngOnInit() {
  }


  loginvalidation(emailvalue, pwdvalue) {
  this.globalServiceService.loginservice(emailvalue, pwdvalue)
  .subscribe(result => {
    console.log(result);
  }, err => {
    console.log(err);
  }
  );
}
}
  


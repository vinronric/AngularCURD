import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vinoth'
  password = ''
  invalidLogin = false

  constructor(private router : Router,private loginService : AuthenticationService) { 
  }

  ngOnInit() {
  }

  checkLogin(){
    if(this.loginService.authenticate(this.username, this.password)){
      console.log("checkLogin() is called in IF loop in LoginComponent");
      this.router.navigate(['']);
      this.invalidLogin = false;
      console.log(" this.invalidLogin status in IF loop" +  this.invalidLogin);
    }else{
      console.log("checkLogin() is called in ESLE loop in LoginComponent");
      this.invalidLogin = true;
      console.log(" this.invalidLogin status in ESLE loop" +  this.invalidLogin);
    }
  }

}

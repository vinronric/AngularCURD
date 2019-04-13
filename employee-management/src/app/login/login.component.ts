import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router : Router,private loginService : AuthenticationService) { 
  }

  ngOnInit() {
  }

  /*checkLogin(){
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
  }*/

  checkLogin() {
    console.log("checkLogin() is called in LoginComponent");
    (this.loginService.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
        console.log(" this.invalidLogin status in data of subscribe -> " +  this.invalidLogin);
      },
      error => {
        this.invalidLogin = true
        console.log(" this.invalidLogin status in error -> " +  this.invalidLogin);

      }
    )
    );

  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log("authenticate() is called in AuthenticationService");
    if (username === "vinoth" && password === "password") {
      sessionStorage.setItem('username', username)
      console.log("sessionStorage.getItem('username') IF AuthenticationService : " + sessionStorage.getItem('username'));
      console.log("username IF : " + username);
      return true;
    } else {
      console.log("sessionStorage.getItem('username') ELSE AuthenticationService : " + sessionStorage.getItem('username'));
      console.log("username ELSE : " + username);
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}

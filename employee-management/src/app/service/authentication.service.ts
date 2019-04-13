import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

 /*authenticate(username, password) {
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
  }*/

  authenticate(username, password) {
    console.log("authenticate() is called in AuthenticationService");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    console.log("headers -> " + headers);
    return this.httpClient.get<User>('http://localhost:8087/employees/validateLogin',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        //Spring Boot Basic Auth Using HTTPInterceptor 
        let authString = 'Basic ' + btoa(username + ':' + password);
        sessionStorage.setItem('basicauth', authString);
        return userData;
       }
     )

    );
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

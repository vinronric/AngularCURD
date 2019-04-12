import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router : Router, private authenticationService : AuthenticationService) { }

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
    if(this.authenticationService.isUserLoggedIn()){
      return true;
    } else{
      this.router.navigate(['login'])
      return false;
    }

  }

}

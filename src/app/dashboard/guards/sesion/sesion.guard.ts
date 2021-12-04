import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {

  constructor(
    private router:Router,
    private cookie:CookieService
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let user:any = this.cookie.get('user');

    if(user){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}

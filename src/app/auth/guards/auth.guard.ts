import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let dato: any = this.cookieService.get('user');

    if (dato) {
      dato = JSON.parse(dato);

      if (dato.rol_id == 1) {
        this.router.navigateByUrl('/app/home');
      } else if (dato.rol_id == 2) {
      } else if (dato.rol_id == 3) {
      }
      return false;
    } else {
      //No hay sesion activa
      // console.log("NO hay session activa");
      return true;
    }
  }
}

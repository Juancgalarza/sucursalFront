import { CookieService } from 'ngx-cookie-service';
import { Usuario } from './../../../models/usuario.model';
import { MenuService } from './../../../servicios/menu/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-sucursal',
  templateUrl: './base-sucursal.component.html',
  styleUrls: ['./base-sucursal.component.css']
})
export class BaseSucursalComponent implements OnInit {

  public menusChildren:any = {};
  public user:Usuario;
  public more = false;

  private menu_hijos_sucursales = 2;

  constructor(
    private _menuService:MenuService,
    private _cookiie:CookieService
  ) {
    this.user = new Usuario();
  }

  ngOnInit(): void {
    this.getMenusHijos();
  }

  getMenusHijos(){
    this.user = JSON.parse(this._cookiie.get('user'));

    this._menuService.getMenus(this.user.rol_id, this.menu_hijos_sucursales)
    .subscribe((res:any) => {
      this.menusChildren = res;
      console.log(this.menusChildren);
    });
  }
}

import { CookieService } from 'ngx-cookie-service';
import { MenuService } from './../../../servicios/menu/menu.service';
import { Usuario } from './../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-producto',
  templateUrl: './base-producto.component.html',
  styleUrls: ['./base-producto.component.css']
})
export class BaseProductoComponent implements OnInit {

  public menusChildren:any = {};
  public user:Usuario;
  public more = false;

  private menu_hijos = 10;

  constructor(
    private _menuService:MenuService,
    private _cookie:CookieService
  ) {
    this.user = new Usuario();
  }

  ngOnInit(): void {
    this.getMenusHijos();
  }

  getMenusHijos(){
    this.user = JSON.parse(this._cookie.get('user'));

    this._menuService.getMenus(this.user.rol_id, this.menu_hijos)
    .subscribe((res:any) => {
      this.menusChildren = res;
    });
  }
}

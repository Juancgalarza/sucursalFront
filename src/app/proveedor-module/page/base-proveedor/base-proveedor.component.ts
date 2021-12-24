import { CookieService } from 'ngx-cookie-service';
import { MenuService } from './../../../servicios/menu/menu.service';
import { Usuario } from './../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-proveedor',
  templateUrl: './base-proveedor.component.html',
  styleUrls: ['./base-proveedor.component.css']
})
export class BaseProveedorComponent implements OnInit {

  public menusChildren:any = {};
  public user:Usuario;
  public more = false;

  private menu_hijos = 7;

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
    let data:any = localStorage.getItem('user');
    this.user = JSON.parse(data);

    this._menuService.getMenus(this.user.rol_id, this.menu_hijos)
    .subscribe((res:any) => {
      this.menusChildren = res;
    });
  }
}

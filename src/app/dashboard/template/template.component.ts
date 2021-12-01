import { MenuService } from './../../servicios/menu/menu.service';
import { Usuario } from './../../models/usuario.model';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public opened = false;
  public usuario:Usuario;

  public resMenu:any = {};
  public menus:Menu[] = [];

  constructor(
    private cookie:CookieService,
    private _menuService:MenuService
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(){
    this.usuario = JSON.parse(this.cookie.get('user'));

    this._menuService.getMenus(this.usuario.rol_id).subscribe(
      ((res:any) => {
        this.resMenu = res;
        this.menus = res.data;
        // console.log(this.resMenu);
      })
    );

  }
}

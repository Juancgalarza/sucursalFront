import { MenuService } from './../../../servicios/menu/menu.service';
import { Usuario } from './../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  public menusChildren:any = {};
  public user:Usuario;
  public more = false;

  private menu_hijos = 12;

  constructor(
    private _menuService:MenuService,
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

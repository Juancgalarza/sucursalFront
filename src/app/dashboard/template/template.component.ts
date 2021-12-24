import { Router } from '@angular/router';
import { MenuService } from './../../servicios/menu/menu.service';
import { Usuario } from './../../models/usuario.model';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('drawer') matDrawer:any;

  constructor(
    private cookie:CookieService,
    private _menuService:MenuService,
    private router:Router
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(){
    let data:any = localStorage.getItem('user');
    this.usuario = JSON.parse(data);

    this._menuService.getMenus(this.usuario.rol_id).subscribe(
      ((res:any) => {
        this.resMenu = res;
        this.menus = res.data;
        // console.log(this.resMenu);
      })
    );

  }

  cerrarMenu(event:any){
    this.matDrawer.close();
  }

  salir(){

    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}

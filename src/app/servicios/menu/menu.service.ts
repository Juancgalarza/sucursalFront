import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private _bs:BaseService,
    private http:HttpClient
  ) { }

  getMenus(rol_id:number, parte:any = 0){
    let url = this._bs.getURlApi() + 'menu/' + rol_id + '/' + parte;
    return this.http.get(url);
  }
}

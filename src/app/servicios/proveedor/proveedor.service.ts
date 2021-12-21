import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(
    private _bs:BaseService,
    private http:HttpClient
  ) { }

  create(data:any){
    let url:string = this._bs.getURlApi() + 'proveedor';
    return this.http.post(url, data);
  }

  get(){
    let url:string = this._bs.getURlApi() + 'proveedor';
    return this.http.get(url);
  }

  getByEstado(estado:string){
    let url:string = this._bs.getURlApi() + 'proveedor/estado/' + estado;
    return this.http.get(url);
  }
}

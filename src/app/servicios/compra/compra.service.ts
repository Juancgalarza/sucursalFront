import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(
    private _bs:BaseService,
    private http:HttpClient
  ) { }

  create(data:any){
    let url:string = this._bs.getURlApi() + 'compra';
    return this.http.post(url, data);
  }

  createDetalle(data:any){
    let url:string = this._bs.getURlApi() + 'detallecompra';
    return this.http.post(url, data);
  }
}

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

  get(negocio_id:any, status_id:any, year:any, month:any){
    let url:string = this._bs.getURlApi() + 'compra/' + negocio_id + '/' + status_id + '/' + year + '/' + month;
    return this.http.get(url);
  }

  cantidadEstado(negocio_id:any, year:any, month:any){
    let url:string = this._bs.getURlApi() + 'compra/cantidad/' + negocio_id + '/' + year + '/' + month;
    return this.http.get(url);
  }
}

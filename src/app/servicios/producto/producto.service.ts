import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private _bs:BaseService,
    private http:HttpClient
  ) { }

  getProductos(estado:string){
    let url:string = this._bs.getURlApi() + 'producto/' + estado;
    return this.http.get(url);
  }

  cambiarEstado(data:any){
    let url:string = this._bs.getURlApi() + 'producto/actualizar-estado';
    return this.http.put(url, data);
  }
}

import { Negocio } from './../../models/negocio.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  constructor(
    private _bs:BaseService,
    private http:HttpClient
  ) { }

  create(data:any){
    let url = this._bs.getURlApi() + 'negocio';
    return this.http.post(url, data);
  }

  get(){
    let url = this._bs.getURlApi() + 'negocio';
    return this.http.get(url);
  }

  changeStatus(object:any){
    let url:string = this._bs.getURlApi() + 'negocio/actualizar/estado';
    return this.http.put(url, object);
  }

  find(id_negocio:any){
    let url:string = this._bs.getURlApi() + 'negocio/' + id_negocio;
    return this.http.get<Negocio>(url);
  }
}

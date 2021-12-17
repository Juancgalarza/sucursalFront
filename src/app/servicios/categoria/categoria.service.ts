import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private _bs:BaseService,
    private http:HttpClient
  ) { }

  create(data:any){
    let url:string = this._bs.getURlApi() + 'categoria';
    return this.http.post(url, data);
  }

  get(orden:any = 'asc'){
    let url:string = this._bs.getURlApi() + 'categoria/' + orden;
    return this.http.get<any>(url);
  }

  delete(data:any){
    let url:string = this._bs.getURlApi() + 'categoria/delete';
    return this.http.put(url, data);
  }
}

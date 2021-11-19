import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private _bs:BaseService,
    private http:HttpClient
  ) { }

  login(data:any){
    let url = this._bs.getURlApi() + 'user/login';
    return this.http.post(url, data);
  }
}

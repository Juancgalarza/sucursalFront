import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(
    private _bs:BaseService,
    private http:HttpClient
  ) { }

  getFile(folder:string, file:string){
    let url:string = this._bs.getURlApi() + 'archivo/' + folder + '/' + file;
    return url;
  }

  sendFile(files: Array<File>, name:string, url:string){
    let urlCompleta = this._bs.getURlApi() + url;
    let formdata:any = new FormData();

    if(files){
      for(let i = 0; i < files.length; i++){
       formdata.append(name + '-'+ i,files[i], files[i].name);
     }
    }

   return this.http.post(urlCompleta, formdata);
  }

  getYear(estado:string = 'A'){
    let url:string = this._bs.getURlApi() + 'year/' + estado;
    return this.http.get(url);
  }

  getMeses(){
    let url:string = this._bs.getURlApi() + 'month';
    return this.http.get<any[]>(url);
  }
}

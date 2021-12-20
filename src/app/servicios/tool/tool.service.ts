import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(
    private _bs:BaseService
  ) { }

  getFile(folder:string, file:string){
    let url:string = this._bs.getURlApi() + 'archivo/' + folder + '/' + file;
    return url;
  }
}

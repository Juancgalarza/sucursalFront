import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.modet';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(
    private _bs:BaseService,
    private http:HttpClient
  ) { }

  getEmpleadosByCampo(campo:string, valor:any):Observable<any>{
    let url = this._bs.getURlApi() + 'empleado/' + campo + '/' + valor;
    return this.http.get<Empleado[]>(url);
  }
}

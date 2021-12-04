import { Horario } from './../../models/horario.model';
import { Seccion } from './../../models/seccion.model';
import { Observable } from 'rxjs';
import { Ciudad } from './../../models/ciudad.model';
import { Provincia } from './../../models/pronvincia.model';
import { TipoNegocio } from './../../models/tipoNegocio.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base/base.service';
import { Injectable } from '@angular/core';
import { TipoEmpleado } from 'src/app/models/tipoEmpleado.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private _bs:BaseService,
    private http:HttpClient
  ) { }

  getTiposNegocio():Observable<any>{
    let url = this._bs.getURlApi() + 'tipo-negocio';
    return this.http.get<TipoNegocio[]>(url);
  }

  getProvincias():Observable<any>{
    let url = this._bs.getURlApi() + 'provincia';
    return this.http.get<Provincia[]>(url);
  }

  getCiudades(provincia_id:string):Observable<any>{
    let url = this._bs.getURlApi() + 'ciudad/' + provincia_id;
    return this.http.get<Ciudad[]>(url);
  }

  getSeccion():Observable<any>{
    let url = this._bs.getURlApi() + 'seccion';
    return this.http.get<Seccion[]>(url);
  }

  getHorarios():Observable<any>{
    let url = this._bs.getURlApi() + 'horario';
    return this.http.get<Horario[]>(url);
  }

  getTipoEmpleo():Observable<any>{
    let url = this._bs.getURlApi() + 'tipo-empleo';
    return this.http.get<TipoEmpleado[]>(url);
  }
}

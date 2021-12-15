import { NegocioService } from './../../../../servicios/negocio/negocio.service';
import { Negocio } from './../../../../models/negocio.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page-sucursal',
  templateUrl: './page-sucursal.component.html',
  styleUrls: ['./page-sucursal.component.css']
})
export class PageSucursalComponent implements OnInit {

  public negocio_id:any;
  public negocio:any  = {};
  public empleado = {
    persona: {
      nombres: '',
      apellidos: ''
    }
  };

  constructor(
    private rutaActiva: ActivatedRoute,
    private _negocioService:NegocioService
    ) {
      this.negocio = {};
    }

  ngOnInit(): void {
    this.negocio_id =  this.rutaActiva.snapshot.params.id;
    this.getNegocio();
  }

  getNegocio(){
    this._negocioService.find(this.negocio_id)
    .subscribe((res:any) => {
      this.negocio = res;
      this.empleado = res.empleado;
      console.log(this.empleado);
    });
  }
}

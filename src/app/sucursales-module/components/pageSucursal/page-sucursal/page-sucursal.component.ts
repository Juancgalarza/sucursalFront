import { ToolService } from './../../../../servicios/tool/tool.service';
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
  public negocio:any  = {
    horario: {
      inicio:'', fin:''
    },
    tipo_negocio:{
      tipo: ''
    },
    provincia: { provincia: ''},
    ciudad: { ciudad: ''},
    seccion: {tipo: ''}
  };
  public empleado = {
    persona: {
      nombres: '',
      apellidos: ''
    },
    tipo_empleo:{
      tipo: ''
    },
    usuario:{
      img: ''
    }
  };

  public foto:string = '';
  public control = false;

  constructor(
    private rutaActiva: ActivatedRoute,
    private _negocioService:NegocioService,
    private _toolService:ToolService
    ) {

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
      // console.log(this.negocio);

      this.foto = this._toolService.getFile('usuarios', this.empleado.usuario.img);
      this.control = true;
    });
  }

}

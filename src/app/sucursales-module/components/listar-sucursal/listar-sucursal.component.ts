import { Horario } from './../../../models/horario.model';
import { Negocio } from './../../../models/negocio.model';
import { NegocioService } from './../../../servicios/negocio/negocio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-sucursal',
  templateUrl: './listar-sucursal.component.html',
  styleUrls: ['./listar-sucursal.component.css']
})
export class ListarSucursalComponent implements OnInit {

  public dataNegocio:any = {};
  public detailHorario:Horario = {
    id: 0,
    estado: 'A',
    fin: '',
    inicio: ''
  };

  public ubicacion:string = '';
  public seccion:string = '';
  public creado:any = {
    fecha: '',
    hora: ''
  };

  constructor(
    private _negocioService:NegocioService
  ) {
  }

  ngOnInit(): void {
    this.getNegocios();
  }

  getNegocios(){
    this._negocioService.get()
    .subscribe((res:any) => {
      this.dataNegocio = res;

      console.log(this.dataNegocio);
    });
  }

  openDetails(negocio:any){
    let card = document.getElementById('card-detail');
    card?.classList.add('translate-x');

    this.detailHorario = negocio.horario;
    this.ubicacion = negocio.ubicacion;
    this.seccion = negocio.seccion.tipo;

    let array = negocio.created_at.split('T');

    this.creado.fecha = array[0];
    this.creado.hora = array[1].split('.')[0];

    console.log(array);
  }

  closeDetail(){
    let card = document.getElementById('card-detail');
    card?.classList.remove('translate-x');
  }
}

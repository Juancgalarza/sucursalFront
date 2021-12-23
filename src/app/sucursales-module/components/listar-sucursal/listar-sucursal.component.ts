import { ToolService } from './../../../servicios/tool/tool.service';
import { CategoriaModalComponent } from './../../modals/categoria-modal/categoria-modal.component';
import { Horario } from './../../../models/horario.model';
import { Negocio } from './../../../models/negocio.model';
import { NegocioService } from './../../../servicios/negocio/negocio.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SnackService } from 'src/app/shared/snack/snack.service';
import { MatDialog } from '@angular/material/dialog';

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
    private _negocioService:NegocioService,
    private _snackService:SnackService,
    private matDialog:MatDialog,
    private _toolService:ToolService
  ) {
  }

  ngOnInit(): void {
    this.getNegocios();
  }

  getNegocios(){
    this._negocioService.get()
    .subscribe((res:any) => {
      this.dataNegocio = res;
    });
  }

  view(img:string){
    return this._toolService.getFile('usuarios', img);
  }

  openDetails(negocio:any){
    let card = document.getElementById('card-detail');
    card?.classList.remove('d-none');

    setTimeout(() => {
      card?.classList.add('translate-x');
    }, 200);

    this.detailHorario = negocio.horario;
    this.ubicacion = negocio.ubicacion;
    this.seccion = negocio.seccion.tipo;

    let array = negocio.created_at.split('T');

    this.creado.fecha = array[0];
    this.creado.hora = array[1].split('.')[0];

  }

  closeDetail(){
    let card = document.getElementById('card-detail');
    card?.classList.remove('translate-x');

    setTimeout(() => {
      card?.classList.add('d-none');
    }, 800);
  }

  changeStatus(n:Negocio, status:string){

    n.estado = status;
    let id:string = 'tr-negocio-' + n.id;
    let tr_negocio = document.getElementById(id);

    if(n.estado == 'I'){
      //Efectos para inactivo
      tr_negocio?.classList.add('animate__heartBeat');
      tr_negocio?.classList.add('bg-off');
      tr_negocio?.classList.remove('animate__pulse');
    }else
    if(n.estado == 'A'){
      tr_negocio?.classList.add('animate__pulse');
      tr_negocio?.classList.remove('bg-off');
      tr_negocio?.classList.remove('animate__heartBeat');
    }else
    if(n.estado == 'E'){
      tr_negocio?.classList.add('animate__backOutRight');
      tr_negocio?.classList.remove('animate__heartBeat');
      tr_negocio?.classList.remove('animate__pulse');
      tr_negocio?.classList.remove('bg-off');
      tr_negocio?.classList.add('bg-remove');
      tr_negocio?.classList.add('animate__backOutRight');

      let copia:Array<any> = this.dataNegocio.data;
      let newData:Array<any> = [];

      setTimeout(() => {
        copia.forEach((element:Negocio) => {
          if(element.id != n.id){
            newData.push(element);
          }
        });
        this.dataNegocio.data = newData;
      }, 800);
    }

    this._negocioService.changeStatus({negocio: n})
    .subscribe((res:any) => {
      this._snackService.open(res.mensaje, res.estado);
    });
  }

  abrirModalCategoria(){

    const matdialogRef = this.matDialog.open(CategoriaModalComponent,{
      data: true
    })
  }
}

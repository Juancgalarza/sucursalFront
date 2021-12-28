import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackService } from './../../../shared/snack/snack.service';
import { CompraService } from './../../../servicios/compra/compra.service';
import { ToolService } from './../../../servicios/tool/tool.service';
import { NegocioService } from './../../../servicios/negocio/negocio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public date = new Date();

  public negocios:any = {};
  public cantidad:any = {};

  public year:string = '2021';
  public mes = this.date.getMonth() + 1;
  public negocio_id:any = "0";
  public status_id :any = 0;

  public years:any[] = [];
  public meses:any[] = [];
  public compras:any[] = [];

  public textoMes:string = '';
  public cant_pend:number = 0;
  public cant_cnf:number = 0;

  constructor(
    private _negocioService:NegocioService,
    private _toolService:ToolService,
    private _compraService:CompraService,
    private _snakcService:SnackService,
    private _snack:MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getNegocios();
    this.getYears();
    this.getMeses();

    this.getCompras(0,0,this.date.getFullYear(), this.mes);
    this.cantidadCompraEstado(0, this.year, this.mes);
  }

  getNegocios(){
    this._negocioService.get().subscribe((res:any) => {
      this.negocios = res;
    });
  }

  getYears(){
    this._toolService.getYear('A')
    .subscribe((res:any) => {
      this.years = res;
    })
  }

  getMeses(){
    this._toolService.getMeses()
    .subscribe((res:any[]) => {
      this.meses = res;
      this.textoMes = this.meses[this.mes - 1].mes;
    });
  }

  changeMes(event:any){
    this.textoMes = this.meses[this.mes - 1].mes;
    this.getCompras(this.negocio_id, this.status_id, this.year, this.mes);
    this.cantidadCompraEstado(this.negocio_id, this.year, this.mes);
  }

  getCompras(negocio_id:any, status_id:any, year:any, month:any){
    this._compraService.get(negocio_id, status_id, year, month)
    .subscribe((res:any) => {
      this.compras = res;

      this.compras.forEach((item) => {
        if(item.status_id == 1) this.cant_pend++;
        if(item.status_id == 2) this.cant_cnf++;
      })
    });
  }

  cantidadCompraEstado(negocio_id:any, year:any, month:any){
    this._compraService.cantidadEstado(negocio_id, year, month)
    .subscribe((res:any) => {
      this.cantidad = res;
    });
  }

  changeCombo(event:any){
    this.getCompras(this.negocio_id, this.status_id, this.year, this.mes);
    this.cantidadCompraEstado(this.negocio_id, this.year, this.mes);
  }

  changeStatus(status_id:any){
    this.status_id = status_id;
    this.getCompras(this.negocio_id, this.status_id, this.year, this.mes);
  }

  confirmar(compra:any){
    let snackBarRef = this._snack.open('¿ Confirma la entrega de la compra ?', 'Sí confirmo');

    console.log(compra);

    snackBarRef.onAction().subscribe(() => {
      console.log('La compra se ha confirmado');
    });

    setTimeout(() => {
      snackBarRef.dismiss();
    }, 3000);
  }
}

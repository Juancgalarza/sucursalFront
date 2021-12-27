import { SnackService } from './../../../shared/snack/snack.service';
import { Compra } from './../../../models/compra.model';
import { Negocio } from './../../../models/negocio.model';
import { NegocioService } from './../../../servicios/negocio/negocio.service';
import { AddProductosComprasComponent } from './../../modals/add-productos-compras/add-productos-compras.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompraService } from 'src/app/servicios/compra/compra.service';
import { DetalleCompra } from 'src/app/models/DetalleCompra.model';

@Component({
  selector: 'app-nueva-compra',
  templateUrl: './nueva-compra.component.html',
  styleUrls: ['./nueva-compra.component.css']
})
export class NuevaCompraComponent implements OnInit {

  public form!: FormGroup;
  public submitted = false;
  public look = false;

  private estado:string = 'A';

  public negocios:any = {};
  public calculos:any = {
    subtotal: 0,
    iva: 0,
    total: 0
  };

  public negocioSeleccion!:any;
  public compra!:Compra;
  public IVA = 12;

  public lista:any[] = [];
  public detallesCompras:DetalleCompra[] = [];
  private date = new Date();
  public hoy = this.date.getDate() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getFullYear();

  constructor(
    private builder:FormBuilder,
    private dialogProductos:MatDialog,
    private _negocioService:NegocioService,
    private _compraService:CompraService,
    private snack:SnackService
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.initNegocio();
    this.getNegocios();
    this.initCompra();
  }

  iniciarForm(){

    this.form = this.builder.group({
      negocio_id: ['0'],
      serie: ['', [Validators.required, Validators.minLength(4)]],
      fecha: [this.hoy],
      subtotal: ['', [Validators.required]],
      iva: ['', [Validators.required]],
      total: ['', Validators.required],
      empleado: ['']
    });
  }

  initNegocio(){
    this.negocioSeleccion = {
      ciudad_id: 0,
      created_at: '',
      descripcion: '',
      empleado_id:0,
      estado: '',
      foto: '',
      horario_id: 0,
      id: 0,
      nombre: '',
      provincia_id: 0,
      seccion_id: 0,
      tipo_empleo_id: 0,
      tipo_negocio_id:0,
      ubicacion: '',
      updated_at: ''
    };
  }

  initCompra(){
    this.compra = {
      created_at: '',
      estado: 'A',
      fecha: '',
      id: 0,
      iva: 0,
      negocio_id: 0,
      serie: '',
      subtotal: 0,
      total: 0,
      updated_at: '',
      usuario_id: 0,
      status_id:0
    }
  }

  getNegocios(){
    this._negocioService.getNegociosByEstado(this.estado).subscribe((res:any) => {
      this.negocios = res;
    })
  }

  openModalProductos(){
    const ref = this.dialogProductos.open(AddProductosComprasComponent,{
      data: this.negocioSeleccion,
      width: '750px',
      height: '600px'
    });

    ref.afterClosed().subscribe((res:any) => {
      if(res){
        if(this.lista.length == 0){
          this.lista = res.lista;
        }else{
          this.lista.push(...res.lista);
        }
        this.setearSubtotal();
      }
    })
  }

  setearSubtotal(){
    this.calculos.subtotal = 0;

    this.lista.forEach((item:any) => {
      this.calculos.subtotal += item.total;
    });

    this.calculos.iva = parseFloat(((this.calculos.subtotal * this.IVA)/100).toFixed(2));
    this.calculos.total = (this.calculos.subtotal + this.calculos.iva).toFixed(2);

    this.form.controls.subtotal.setValue(this.calculos.subtotal);
    this.form.controls.iva.setValue(this.calculos.iva);
    this.form.controls.total.setValue(this.calculos.total);
  }

  procesarForm(){

    const form = this.form.value;
    this.submitted = true;

    if(this.form.valid){
      this.look = true;

      this.compra.negocio_id = form.negocio_id;
      this.compra.usuario_id = this.negocioSeleccion.empleado.user_id;
      this.compra.serie = form.serie;
      this.compra.status_id = 1;
      this.compra.subtotal = form.subtotal;
      this.compra.iva = form.iva;
      this.compra.total = form.total;

      this._compraService.create({compra: this.compra})
      .subscribe((res:any) => {
        // console.log(res);
        if(res.estado){
          this.setearDetalleComprasYguardar(res.compra.id);
          this.lista = [];
          this.form.reset();
          this.submitted = false;
          this.form.controls.fecha.setValue(this.hoy);
        }else{
          this.snack.open(res.mensaje, 'text-danger');
        }
        this.look = false;
      });

    }
  }

  setearDetalleComprasYguardar(id:any){

    if(this.lista.length > 0){
      this.lista.forEach((item:any) => {
        let det:DetalleCompra = {
          cantidad: item.cantidad,
          compra_id: id,
          id: 0,
          precio: item.producto.precio_compra,
          producto_id: item.producto.id,
          total: item.total
        };

        this.detallesCompras.push(det);
      });

      this._compraService.createDetalle({detallecompra: this.detallesCompras})
      .subscribe((res:any) => {
        this.snack.open('Compra realizada !!', 'text-primary');
        this.detallesCompras = [];
      });

    }
  }

  get f(){
    return this.form.controls;
  }

  getNegocio(event:any){
    let id = event.value;
    let nombres:string = '';

    if(id != 0){
      this._negocioService.find(id)
      .subscribe((res:any) => {
        this.negocioSeleccion = res;
        nombres = this.negocioSeleccion.empleado.persona.nombres + ' ' + this.negocioSeleccion.empleado.persona.apellidos;
        this.form.controls.empleado.setValue(nombres);
      });
    }else{
      this.negocioSeleccion.id = 0;
      this.form.controls.empleado.setValue(nombres);
    }

  }
}

import { ToolService } from './../../../servicios/tool/tool.service';
import { Producto } from './../../../models/prdoucto.model';
import { NegocioService } from './../../../servicios/negocio/negocio.service';
import { CategoriaService } from './../../../servicios/categoria/categoria.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackService } from 'src/app/shared/snack/snack.service';
import { ValidacionService } from 'src/app/servicios/validacion/validacion.service';

@Component({
  selector: 'app-add-productos-compras',
  templateUrl: './add-productos-compras.component.html',
  styleUrls: ['./add-productos-compras.component.css'],
})
export class AddProductosComprasComponent implements OnInit {
  public categoriasData: any = {};
  public texto: string = '';

  public productos: any[] = [];
  public lista: any[] = [];

  public controlProductos = false;
  public chekAll = false;

  constructor(
    public dialogRef: MatDialogRef<AddProductosComprasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snack: SnackService,
    private _categoriaService: CategoriaService,
    private _validarService: ValidacionService,
    private _negocioService: NegocioService,
    private _toolService: ToolService
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    // console.log(this.data);
    this.getCategoria();
    this.getNegocioProducto(this.data.id, 0);
  }

  getCategoria() {
    this._categoriaService.get().subscribe((res: any) => {
      this.categoriasData = res;
      // console.log(res);
    });
  }

  getNegocioProducto(negocio_id: any, categoria_id: any) {
    this._negocioService
      .getProductosNegocio(negocio_id, categoria_id)
      .subscribe((res: any) => {
        this.controlProductos = true;
        this.productos = res;
        this.productos.map((item) => {
          item.checked = false;
          item.cantidad = 1;
          item.total = 0;
        });
      });
  }

  cerrar() {
    this.dialogRef.close();
  }

  selectAll(event: any) {
    let ban = event.target.checked;

    this.productos.forEach((item: any) => {
      item.checked = ban;
    });
    this.lista = !ban ? [] : this.productos;
  }

  isCheckedAll() {
    this.chekAll = this.productos.every((item) => item.checked);
    return this.chekAll;
  }

  cargarProductos(event: any) {
    let id = event.value == 0 ? 0 : event.value;
    this.getNegocioProducto(this.data.id, id);
  }

  validarAlphanumeric(event: any) {
    return this._validarService.validateAphaNumeric(event);
  }

  addLista(event: any, data: any) {
    if (event.target.checked) {
      this.lista.push(data);
    } else {
      let nuevo = this.lista.filter(
        (item) => item.producto.id != data.producto.id
      );
      this.lista = nuevo;
    }
  }

  validateNumberWithDecimal(event: any) {
    return this._validarService.validateWihtDecimal(event);
  }

  view(path: string, filename: string) {
    return this._toolService.getFile(path, filename);
  }

  pasarLista() {
    let pasa = false;

    if (this.lista.length > 0) {
      this.lista.forEach((item: any) => {
        if (item.cantidad == 0){
          pasa = true;
          this._snack.open('La cantidad debe ser mayor a cero', 'text-warning');
        }else
        if(item.producto.precio_compra == 0){
          pasa = true;
          this._snack.open('El precio de compra debe ser mayor a cero', 'text-warning');
        }
      });
    }

    if (pasa) return;

    this.lista.forEach((item:any) => {
      item.total = parseFloat((item.producto.precio_compra * item.cantidad).toFixed(2))
    });

    this.dialogRef.close({
      lista:this.lista
    });
  }
}

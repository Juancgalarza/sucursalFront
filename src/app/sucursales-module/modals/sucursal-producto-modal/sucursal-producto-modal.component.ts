import { NegocioService } from './../../../servicios/negocio/negocio.service';
import { ValidacionService } from './../../../servicios/validacion/validacion.service';
import { ProductoService } from './../../../servicios/producto/producto.service';
import { Observable } from 'rxjs';
import { CategoriaService } from './../../../servicios/categoria/categoria.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria.model';
import { SnackService } from 'src/app/shared/snack/snack.service';

export interface aux {
  cantidad: number,
  categoria: []
};

@Component({
  selector: 'app-sucursal-producto-modal',
  templateUrl: './sucursal-producto-modal.component.html',
  styleUrls: ['./sucursal-producto-modal.component.css']
})
export class SucursalProductoModalComponent implements OnInit {

  public texto:string = '';

  public categoriasData:any = {};
  public productos:any[] = [];
  public addProductos:any[] = [];

  constructor(
    public dialogRef: MatDialogRef<SucursalProductoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _categoriaService:CategoriaService,
    private _productoService:ProductoService,
    private _validarService:ValidacionService,
    private _snack:SnackService,
    private _negocioService:NegocioService
  ) { }

  ngOnInit(): void {
    // console.log(this.data);
    this.getCategoria();
    this.getProductosByCategoria(-1,'A');
  }

  cerrar(){
    this.dialogRef.close();
  }

  getCategoria(){
    this._categoriaService.get().subscribe((res:any) => {
      this.categoriasData = res;
      // console.log(res);
    });
  }

  getProductosByCategoria(categoria_id:any, estado:any){
    this._productoService.byCategoria(categoria_id, estado)
    .subscribe((res:any) => {
      this.productos = res;
      this.productos.map(item => item.checked = false );
    });
  }

  cargarProductos(event:any){
    this.getProductosByCategoria(event.value, 'A');
  }

  selectAll(event:any){
    let ban = event.target.checked;
    this.productos.forEach((item:any) => item.checked = ban);

    this.addProductos = (ban) ? this.productos: [];
  }

  isCheckedAll(){
   return this.productos.every(item => item.checked);
  }

  addProducto(event:any, data:any){
    if(event.target.checked){
      this.addProductos.push(data);
    }else{
      let nuevo = this.addProductos.filter(item => item.id != data.id);
      this.addProductos = nuevo;
    }
  }

  validarAlphanumeric(event:any){
    return this._validarService.validateAphaNumeric(event);
  }

  guardar(){
    if(this.addProductos.length == 0){
      this._snack.open('Debe seleccionar al menos un producto', 'text-warning');
    }else{
      let json = {
        negocio: this.data,
        productos: this.addProductos
      };

      this._negocioService.agregarProductos(json)
      .subscribe((res:any) => {
        console.log(res);
        if(res.factor == 0){
          this._snack.open(res.mensaje, 'text-danger');
        }else
        if(res.factor == 1){
          this._snack.open(res.mensaje, 'text-warning');
          this.addProductos = [];
          this.dialogRef.close(true);
        }else
        if(res.factor == 2){
          this._snack.open(res.mensaje, 'text-primary');
          this.addProductos = [];
          this.dialogRef.close(true);
        }
      });
    }
  }
}

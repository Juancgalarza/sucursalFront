import { ProductoService } from './../../../servicios/producto/producto.service';
import { Observable } from 'rxjs';
import { CategoriaService } from './../../../servicios/categoria/categoria.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria.model';

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
    private _productoService:ProductoService
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
}

import { CategoriaService } from './../../../servicios/categoria/categoria.service';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/prdoucto.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackService } from 'src/app/shared/snack/snack.service';
import { ValidacionService } from 'src/app/servicios/validacion/validacion.service';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  public files: File[] = [];
  public proveedores:Proveedor[] = [];
  public categoria:Categoria[] = [];

  public form!: FormGroup;
  public producto!:Producto;

  public submitted = false;
  public activeImage:Boolean = false;

  constructor(
    public dialogRef: MatDialogRef<NuevoProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _snack:SnackService,
    private builder:FormBuilder,
    private _validarService:ValidacionService,
    private _proveedorService:ProveedorService,
    private _categoriaService:CategoriaService
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.iniciarForm();
    this.getProveedores();
    this.getCategorias();
  }

  initProducto(){
    this.producto.foto = 'producto-default.png';
  }

  iniciarForm(){
    this.form = this.builder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      codigo: ['', [Validators.required, Validators.minLength(4)]],
      proveedor_id: ['0', [Validators.required]],
      categoria_id: ['0', [Validators.required]],
      precio_venta: ['', [Validators.required]]
    });
  }

  validarAlfanumerico(event:any){
    return this._validarService.validateAphaNumeric(event);
  }

  validarNumeroDecimal(event:any){
    return this._validarService.validateWihtDecimal(event);
  }

  getProveedores(){
    this._proveedorService.getByEstado('A')
    .subscribe((res:any) => {
      this.proveedores = res.data;
    });
  }

  getCategorias(){
    this._categoriaService.get().subscribe(
      (res:any) => {
        this.categoria = res.categoria;
      }
    )
  }

  onSelect(event:any) {

    if(!this.activeImage){
      this.files.push(...event.addedFiles);
      this.activeImage = true;
      // console.log(this.files[0]);
    }else{
      this._snack.open("Only upload 1 image !!", "text-primary");
    }
	}

  onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
    this.activeImage = false;
	}

  get f(){
    return this.form.controls;
  }

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.submitted = true;
    const form = this.form.value;

    if(this.form.invalid){
      return;
    }
  }
}

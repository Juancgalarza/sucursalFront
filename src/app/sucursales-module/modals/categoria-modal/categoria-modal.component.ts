import { ValidacionService } from './../../../servicios/validacion/validacion.service';
import { CategoriaService } from './../../../servicios/categoria/categoria.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-categoria-modal',
  templateUrl: './categoria-modal.component.html',
  styleUrls: ['./categoria-modal.component.css']
})
export class CategoriaModalComponent implements OnInit {

  public dataCategoria:any = {};
  public categoria:string = '';

  constructor(
    public dialogRef: MatDialogRef<CategoriaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _categoriaService:CategoriaService,
    private _validacionService:ValidacionService
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.getCategorias();
  }


  getCategorias(){
    this._categoriaService.get()
    .subscribe((res:any) => {
      this.dataCategoria = res;
    })
  }

  cerrar(){
    this.dialogRef.close();
  }

  validateLetters(event:any){
    return this._validacionService.validateLetters(event);
  }

  remove(cat:any){

    cat.estado = 'E';
    let nuevo:any[] = [];

    this.dataCategoria.categoria.forEach((item:any, indice:any) => {
      if(item.id != cat.id){
        nuevo.push(item);
      }
    });

    this.dataCategoria.categoria = nuevo;

    this._categoriaService.delete({categoria: cat})
    .subscribe((res:any) => {
      console.log(res);
    });
  }

  add(){
    let categoria:Categoria = {
      id: 0,
      detalle: this.categoria,
      estado: 'A'
    };

    this._categoriaService.create({categoria: categoria})
    .subscribe((res:any) => {
      console.log(res);
      this.dataCategoria.categoria.push(res.categoria);
      this.categoria = '';
    })
  }
}

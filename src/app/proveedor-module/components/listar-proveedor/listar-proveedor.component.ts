import { ProveedorService } from './../../../servicios/proveedor/proveedor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {

  public proveedorData:any = {};

  constructor(
    private _proveedorService:ProveedorService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this._proveedorService.get()
    .subscribe((res:any) => {
      this.proveedorData = res;
    });
  }

  changeStatus(item:any, status:string){

  }
}

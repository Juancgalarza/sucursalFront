import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesModuleRoutingModule } from './sucursales-module-routing.module';
import { BaseSucursalComponent } from './page/base-sucursal/base-sucursal.component';
import { AdminModule } from '../admin/admin.module';

import {MatIconModule} from '@angular/material/icon';
import { NuevaSucursalComponent } from './components/nueva-sucursal/nueva-sucursal.component';
import { ListarSucursalComponent } from './components/listar-sucursal/listar-sucursal.component';

@NgModule({
  declarations: [
    BaseSucursalComponent,
    NuevaSucursalComponent,
    ListarSucursalComponent
  ],
  imports: [
    CommonModule,
    SucursalesModuleRoutingModule,
    AdminModule,
    MatIconModule
  ],
  exports: []
})
export class SucursalesModuleModule { }

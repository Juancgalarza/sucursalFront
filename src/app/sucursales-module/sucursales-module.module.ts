import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesModuleRoutingModule } from './sucursales-module-routing.module';
import { BaseSucursalComponent } from './page/base-sucursal/base-sucursal.component';
import { AdminModule } from '../admin/admin.module';

import {MatIconModule} from '@angular/material/icon';
import { NuevaSucursalComponent } from './components/nueva-sucursal/nueva-sucursal.component';
import { ListarSucursalComponent } from './components/listar-sucursal/listar-sucursal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { PageSucursalComponent } from './components/pageSucursal/page-sucursal/page-sucursal.component';

@NgModule({
  declarations: [
    BaseSucursalComponent,
    NuevaSucursalComponent,
    ListarSucursalComponent,
    PageSucursalComponent
  ],
  imports: [
    CommonModule,
    SucursalesModuleRoutingModule,
    AdminModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: []
})
export class SucursalesModuleModule { }

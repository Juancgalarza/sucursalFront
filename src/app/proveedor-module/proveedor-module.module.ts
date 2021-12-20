import { AdminModule } from './../admin/admin.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorModuleRoutingModule } from './proveedor-module-routing.module';
import { BaseProveedorComponent } from './page/base-proveedor/base-proveedor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NuevoProveedorComponent } from './components/nuevo-proveedor/nuevo-proveedor.component';
import { ListarProveedorComponent } from './components/listar-proveedor/listar-proveedor.component';

@NgModule({
  declarations: [
    BaseProveedorComponent,
    NuevoProveedorComponent,
    ListarProveedorComponent
  ],
  imports: [
    CommonModule,
    ProveedorModuleRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule,
    FormsModule,
    AdminModule
  ]
})
export class ProveedorModuleModule { }

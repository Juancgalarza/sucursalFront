import { PipesModule } from './../pipes/pipes.module';
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

import { ProductoModuleRoutingModule } from './producto-module-routing.module';
import { BaseProductoComponent } from './page/base-producto/base-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NuevoProductoComponent } from './modals/nuevo-producto/nuevo-producto.component';

import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    BaseProductoComponent,
    ListaProductosComponent,
    NuevoProductoComponent,
  ],
  imports: [
    CommonModule,
    ProductoModuleRoutingModule,
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
    AdminModule,
    PipesModule,
    MatPaginatorModule,
    NgxDropzoneModule
  ],
  entryComponents:[NuevoProductoComponent]
})
export class ProductoModuleModule { }

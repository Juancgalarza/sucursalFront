import { MatPaginatorModule } from '@angular/material/paginator';
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

import { ComprasRoutingModule } from './compras-routing.module';
import { BaseComponent } from './pages/base/base.component';
import { NuevaCompraComponent } from './components/nueva-compra/nueva-compra.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddProductosComprasComponent } from './modals/add-productos-compras/add-productos-compras.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    BaseComponent,
    NuevaCompraComponent,
    AddProductosComprasComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule,
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
    MatProgressSpinnerModule
  ],
  exports: [
    AddProductosComprasComponent
  ]
})
export class ComprasModule { }

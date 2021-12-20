import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { BaseProductoComponent } from './page/base-producto/base-producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: BaseProductoComponent,
    children: [
      {
        path: '',
        redirectTo: 'listar', pathMatch:'full'
      },
      {
        path: 'listar', component: ListaProductosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoModuleRoutingModule { }

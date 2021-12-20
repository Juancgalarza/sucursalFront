import { ListarProveedorComponent } from './components/listar-proveedor/listar-proveedor.component';
import { NuevoProveedorComponent } from './components/nuevo-proveedor/nuevo-proveedor.component';
import { BaseProveedorComponent } from './page/base-proveedor/base-proveedor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: BaseProveedorComponent,
    children: [
      {
        path: '',
        redirectTo: 'nuevo', pathMatch: 'full'
      },
      {
        path: 'nuevo', component: NuevoProveedorComponent
      },{
        path: 'listar', component: ListarProveedorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorModuleRoutingModule { }

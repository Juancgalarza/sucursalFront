import { PageSucursalComponent } from './components/pageSucursal/page-sucursal/page-sucursal.component';
import { ListarSucursalComponent } from './components/listar-sucursal/listar-sucursal.component';
import { NuevaSucursalComponent } from './components/nueva-sucursal/nueva-sucursal.component';
import { BaseSucursalComponent } from './page/base-sucursal/base-sucursal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: BaseSucursalComponent,
    children: [
      {
        path: 'nueva', component: NuevaSucursalComponent
      },
      {
        path: 'listar', component: ListarSucursalComponent
      },
      {
        path: 'informacion/:id', component: PageSucursalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesModuleRoutingModule { }

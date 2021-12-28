import { ListarComponent } from './components/listar/listar.component';
import { NuevaCompraComponent } from './components/nueva-compra/nueva-compra.component';
import { BaseComponent } from './pages/base/base.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '', component: BaseComponent,
   children: [
     {
       path: '',
       redirectTo: 'nueva', pathMatch: 'full'
     },
     {
       path: 'nueva', component: NuevaCompraComponent
     },{
       path: 'listar', component: ListarComponent
     }
   ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }

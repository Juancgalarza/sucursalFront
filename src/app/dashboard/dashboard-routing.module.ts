import { CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { HomeComponent } from '../admin/home/home.component';
import { UserAdminComponent } from '../admin/components/user-admin/user-admin.component';
import { SesionGuard } from './guards/sesion/sesion.guard';

const routes: Routes = [
  {
    path: '', component: TemplateComponent,
    canActivate: [SesionGuard],
    children: [
      {
        path: 'home', component: HomeComponent
      },{
        path: 'users', component: UserAdminComponent
      },
      {
        path: 'sucursales',
        loadChildren: () => import('./../sucursales-module/sucursales-module.module').then(m => m.SucursalesModuleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

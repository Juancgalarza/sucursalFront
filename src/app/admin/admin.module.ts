import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { NavComponent } from './layouts/nav/nav.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserAdminComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  exports: [HomeComponent, UserAdminComponent]
})
export class AdminModule { }

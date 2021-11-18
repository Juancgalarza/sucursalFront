import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TemplateComponent } from './template/template.component';
import { LayoutsComponent } from './layouts/layouts.component';

import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    TemplateComponent,
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [TemplateComponent]
})
export class DashboardModule { }

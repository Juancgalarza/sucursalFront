import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginarPipe } from './paginacion/paginar.pipe';



@NgModule({
  declarations: [
    PaginarPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PaginarPipe]
})
export class PipesModule { }

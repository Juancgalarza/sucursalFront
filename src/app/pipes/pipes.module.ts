import { SearchPipe } from './search/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginarPipe } from './paginacion/paginar.pipe';
import { CalculatTotalPipe } from './calcular/calculat-total.pipe';

@NgModule({
  declarations: [
    PaginarPipe,
    SearchPipe,
    CalculatTotalPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PaginarPipe, SearchPipe, CalculatTotalPipe]
})
export class PipesModule { }

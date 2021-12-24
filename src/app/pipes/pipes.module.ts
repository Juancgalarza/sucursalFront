import { SearchPipe } from './search/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginarPipe } from './paginacion/paginar.pipe';

@NgModule({
  declarations: [
    PaginarPipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PaginarPipe, SearchPipe]
})
export class PipesModule { }

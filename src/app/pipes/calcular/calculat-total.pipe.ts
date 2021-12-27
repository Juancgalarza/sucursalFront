import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatTotal'
})
export class CalculatTotalPipe implements PipeTransform {

  transform(total:number, cantidad:number, precio_unitario:number): number {
    cantidad = parseInt(cantidad.toString());
    precio_unitario = parseFloat(precio_unitario.toString());

    total = cantidad * precio_unitario;
    total = parseFloat(total.toFixed(2));
    return total;
  }

}

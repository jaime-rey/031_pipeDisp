import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divisionEntera'
})
export class DivisionEnteraPipe implements PipeTransform {

  transform(value: number, divisor: string): string {
    let div = parseFloat(divisor);
    let result =value/div;
    let cociente = Math.floor(value/div);
    let resto = value / div - Math.floor(value / div);
    let integer = value % div;
    return "Resultado: "+result +" Cociente: "+cociente+" # Resto: "+resto+" # Entero: "+integer;
  }

}

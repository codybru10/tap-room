import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "quantity",
  pure: false
})

export class QuantityPipe implements PipeTransform {
  transform(input: Keg[]){
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].pints <== 120) {
        output.push(input[i]);
      }
    }
    return output;
  }
}

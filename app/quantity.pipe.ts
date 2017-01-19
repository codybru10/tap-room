import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "quantity",
  pure: false
})

export class QuantityPipe implements PipeTransform {
  transform(input: Keg[], quantity){
    var output: Keg[] = [];
    if(quantity === "fullKegs"){
    for (var i = 0; i < input.length; i++) {
      if (input[i].pints === 124) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (quantity === "lowKegs") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].pints === 120) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }
}

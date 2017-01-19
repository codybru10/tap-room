import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h3>New Keg</h3>
    <div>
      <label>Enter New Beer</label>
      <input #newName>
      <label>Enter Brand</label>
      <input #newBrand>
      <label>Enter Price</label>
      <input #newPrice>
      <label>Enter Alcohol Content</label>
      <input #newAlcoholContent>
      <button (click)="submitNewBeer(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value='';" class="btn">Add Beer</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() addBeer = new EventEmitter();

  submitNewBeer(name: string, brand: string, price: number, alcoholContent: string){
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.addBeer.emit(newKegToAdd);
  }

}

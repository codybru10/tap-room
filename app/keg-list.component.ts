import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="fullKegs">Full Kegs</option>
    <option value="lowKegs">Kegs Near Empty</option>
  </select>

  <div *ngFor="let currentKeg of childKegList | quantity:filterByQuantity" class="well">
    <h5>{{currentKeg.name}}</h5>
    <p>{{currentKeg.brand}}</p>
    <p [class]="priceColor(currentKeg)">$ {{currentKeg.price}}</p>
    <p>{{currentKeg.alcoholContent}}%</p>
    <p>{{currentKeg.pints}} pints</p>
    <button (click)="editKeg(currentKeg)" class="btn">Edit</button>
    <button (click)="sellPint(currentKeg)" class="btn">Sell Pint</button>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() sellKeg = new EventEmitter();

  priceColor(currentKeg){
    if (currentKeg.price >= 6) {
      return "bg-danger";
    } else {
      return "bg-info";
    }
  }

  filterByQuantity: string = "allKegs";

  editKeg(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPint(kegToSell: Keg) {
    this.sellKeg.emit(kegToSell);
  }

  onChange(optionFromMenu) {
    this.filterByQuantity = optionFromMenu;
  }
}

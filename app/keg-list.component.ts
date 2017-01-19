import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template:`
  <div *ngFor="let currentKeg of childKegList" class="well">
    <h5>{{currentKeg.name}}</h5>
    <p>{{currentKeg.brand}}</p>
    <p>$ {{currentKeg.price}}</p>
    <p>{{currentKeg.alcoholContent}}</p>
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

  editKeg(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPint(kegToSell: Keg) {
    this.sellKeg.emit(kegToSell);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
    <h3>{{childSelectedKeg.name}}</h3>
    <h4>Edit Keg</h4>
    <label>Enter Keg Name</label>
    <input [(ngModel)]="childSelectedKeg.name">
    <input [(ngModel)]="childSelectedKeg.brand">
    <input [(ngModel)]="childSelectedKeg.price">
    <input [(ngModel)]="childSelectedKeg.alcoholContent">
    <button (click)="doneEditing()" class="btn">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickDone = new EventEmitter();

  doneEditing() {
    this.clickDone.emit();
  }

}

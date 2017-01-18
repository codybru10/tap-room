import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Bru's Tap Room</h1>
    <h3>Current Kegs as of {{month}}/{{date}}/{{year}}</h3>
    <div *ngFor="let currentKeg of kegs" class="well">
      <h5>{{currentKeg.name}}</h5>
      <p>{{currentKeg.brand}}</p>
      <p>$ {{currentKeg.price}}</p>
      <p>{{currentKeg.alcoholContent}}</p>
      <p>{{currentKeg.pints}} pints</p>
      <button (click)="editKeg(currentKeg)" class="btn">Edit</button>
    </div>
    <br>
    <hr>
    <div *ngIf="selectedKeg">
      <h3>{{selectedKeg.name}}</h3>
      <h4>Edit Keg</h4>
      <label>Enter Keg Name</label>
      <input [(ngModel)]="selectedKeg.name">
      <input [(ngModel)]="selectedKeg.brand">
      <input [(ngModel)]="selectedKeg.price">
      <input [(ngModel)]="selectedKeg.alcoholContent">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  currentDate = new Date();
  month = this.currentDate.getMonth() + 1;
  date = this.currentDate.getDate();
  year = this.currentDate.getFullYear();
  kegs: Keg[] = [
    new Keg('Busch Light', 'Anheuser-Busch', 2, '4%'),
    new Keg('Busch Light', 'Anheuser-Busch', 2, '4%'),
    new Keg('Busch Light', 'Anheuser-Busch', 2, '4%')
  ];

  selectedKeg = null;

  finishedEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

}

export class Keg {
  public pints: number = 124
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string) {}
}

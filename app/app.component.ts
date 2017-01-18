import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Bru's Tap Room</h1>
    <h3>Current Kegs as of {{month}}/{{date}}/{{year}}</h3>
    <div *ngFor="let currentKegs of kegs" class="well">
      <h5>{{currentKegs.name}}</h5>
      <p>{{currentKegs.brand}}</p>
      <p>$ {{currentKegs.price}}</p>
      <p>{{currentKegs.alcoholContent}}</p>
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
    new Keg('Busch Light', 'Anheuser-Busch', 60, '4%'),
    new Keg('Busch Light', 'Anheuser-Busch', 60, '4%'),
    new Keg('Busch Light', 'Anheuser-Busch', 60, '4%')
  ];

}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string) {}
}

import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Bru's Tap Room</h1>
    <h3>Current Kegs as of {{month}}/{{date}}/{{year}}</h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (sellKeg)="sellPint($event)"></keg-list>
    <br>
    <hr>
    <new-keg (addBeer)="addKeg($event)"></new-keg>
    <edit-keg [childSelectedKeg]="selectedKeg" (clickDone)="finishedEditing()"></edit-keg>
  </div>
  `
})

export class AppComponent {
  currentDate = new Date();
  month = this.currentDate.getMonth() + 1;
  date = this.currentDate.getDate();
  year = this.currentDate.getFullYear();

  masterKegList: Keg[] = [
    new Keg('Busch Light', 'Anheuser-Busch', 2, 3.9),
    new Keg('Bud Light', 'Anheuser-Busch', 3, 4),
    new Keg('Budwieser', 'Anheuser-Busch', 3, 4)
  ];

  selectedKeg = null;

  finishedEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg) {
    console.log(clickedKeg)
    this.selectedKeg = clickedKeg;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

  sellPint(kegSold) {
    kegSold.pints-=1;
  }


}

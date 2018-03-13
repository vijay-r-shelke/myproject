import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser/src/dom/events/event_manager';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  counts = 1;
  output = '';

public myobject = {
  fname: 'Vijay',
  lname: 'Shelke',
  address: function() {
    return 'E-503, Green Scape Royal Society, Plot 25, Sector 7, Kamothe, Navi Mumbai 410209';
  }

};

footers = '&copy; 2018, HMC Solutions';

firstName: String = 'Vijay';
lastName: String = 'Shelke';
fullName() {
  return this.firstName + ' ' + this.lastName;
}

myevent() {
  this.counts++;
}
getvalue(event) {
  this.output += event.target.value;
}

}

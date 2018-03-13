import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  name: string;
  age: number;
  address: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Vijay Shelke';
    this.age = 36;
    this.address = '701, B Wing, Skyline Residency, Plot 5, Sector: 8, Kamothe';
  }

}

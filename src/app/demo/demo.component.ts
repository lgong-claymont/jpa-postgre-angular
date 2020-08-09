import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

interface City {
  id: number;
  name: string;
}

const CITIES: City[] = [
  { id: 1, name: 'Paoli' },
  { id: 2, name: 'Claymont' }
];


function getCities(): Promise<City[]> {
  return Promise.resolve(CITIES); // TODO: get hero data from the server;
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {
  title = 'Tour of Cities';

  cities: City[] = [];

  ngOnInit() {
    getCities().then(cities => (this.cities = cities));
  }
}



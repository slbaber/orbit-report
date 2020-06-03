import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {

          let newSatellite: Satellite;
 
          let fetchedSatellites = data.satellites;
          for (let sat of fetchedSatellites) {
            newSatellite = new Satellite(sat.name, sat.type, sat.operational, sat.orbitType, sat.launchDate)
            this.sourceList.push(newSatellite);
          }
 
       }.bind(this));
    }.bind(this));
 
  }
 
}

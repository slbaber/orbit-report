import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  countForType(type: string): number{
    let count = 0;
    if (this.satellites) {
      for (const s of this.satellites){
        if (s.type.toLowerCase() == type.toLowerCase()){
          count += 1;
        }
      }
    }
    return count;

  }

}

import { Component, OnInit } from '@angular/core';
import { UnitComponent } from '../unit/unit.component';
import { regimentData } from './data';
import * as _ from 'lodash';

@Component({
  selector: 'app-regiment',
  templateUrl: './regiment.component.html',
  styleUrls: ['./regiment.component.scss']
})
export class RegimentComponent implements OnInit {
  regiment_types: string[] = _.keys(regimentData);
  regiment: Regiment = new Regiment(this.regiment_types[0]);

  setRegimentType(type: string): void {
    this.regiment = new Regiment(type);
  }
  delete_regiment(){

  }
  constructor() { }

  ngOnInit() {
  }

}

class Regiment {
  min_units: number;
  max_units: number;
  min_companies: number;
  max_companies: number;
  min_commander_rank: number;
  max_commander_rank: number;
  type: string;
  units: UnitComponent[];
  constructor(type: string) {
    let data =regimentData[type];
    this.min_units = data.min_units;
    this.max_units = data.max_units;
    this.min_companies = data.min_companies;
    this.max_companies = data.max_companies;
    this.min_commander_rank = data.min_commander_rank;
    this.max_commander_rank = data.max_commander_rank;
    this.type = data.type;
    this.units = [];
    for(let i=0; i<this.min_units; i++){
      this.units.push(new UnitComponent())
    }
    console.log(this.units);
  }
}

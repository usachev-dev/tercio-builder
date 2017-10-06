import { Component, OnInit } from '@angular/core';
import { unitData } from './data';
import * as _ from 'lodash';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  inputs: ['type']
})
export class UnitComponent implements OnInit {
  type: string;
  unit: Unit;

  constructor() { }

  ngOnInit() {
    this.unit = new Unit(this.type);
    console.log(this);
  }

  initUnit(){

  }

}


class Unit {
  name: string;
  type: string;
  stats: stats;

  constructor(type: string){
    console.log(type);
    this.type = type;
    this.stats = unitData[type];
  }
}

type stats = {
  base_cost: number
  speed: number,
  melee: number,
  shoot: [number],
  discipline: number,
  courage: number,
  stamina: number,
  infantry: number,
  cavalry: number,
  salvo: number,
  artillery: number,
  rules: string[],
  weaponry: string[]
}

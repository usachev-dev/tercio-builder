import { Component, OnInit } from '@angular/core';
import { TercioDataService } from "../tercio-data.service";

import * as _ from 'lodash';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  inputs: ['unit_type']
})
export class UnitComponent implements OnInit {
  unit_type: string;

  constructor(private dataService: TercioDataService) { }

  ngOnInit() {

    //console.log(this);
  }

  initUnit(){

  }
}


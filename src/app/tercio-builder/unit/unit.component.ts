import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TercioDataService } from "../tercio-data.service";
import { Unit } from "../domain_model/unit";
import * as _ from 'lodash';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  inputs: ['unit']
})
export class UnitComponent implements OnInit {
  unit: Unit;

  options_open: boolean;

  faction: string;
  @Output()
  delete_unit: EventEmitter<number> = new EventEmitter();
  @Output()
  delete_company: EventEmitter<number> = new EventEmitter();

  constructor(private dataService: TercioDataService) { }

  ngOnInit() {
  }

  deleteUnit(){
    if (this.unit.is_company){
      this.delete_company.emit();
    } else {
      this.delete_unit.emit()
    }
  }

}


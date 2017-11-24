import {Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList} from '@angular/core';
import { UnitComponent } from '../unit/unit.component';
import { CommanderComponent } from '../commander/commander.component';
import { TercioDataService } from "../tercio-data.service";
import { Regiment } from "../domain_model/regiment";
import * as _ from 'lodash';

@Component({
  selector: 'app-regiment',
  templateUrl: './regiment.component.html',
  styleUrls: ['./regiment.component.scss'],
  inputs: ['regiment']
})
export class RegimentComponent implements OnInit {
  regiment: Regiment;

  regiment_data: any;
  units: string[] = [];
  faction: string;

  cost: number;

  constructor(private dataService: TercioDataService) { }

  @Output()
  delete_regiment: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
  }
  deleteRegiment(){
    this.delete_regiment.emit(this.regiment.regiment_index)
  }
  isEmpty(o: any){
    return _.isEmpty(o);
  }
}


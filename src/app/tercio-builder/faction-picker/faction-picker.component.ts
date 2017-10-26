import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TercioDataService } from "../tercio-data.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-faction-picker',
  templateUrl: './faction-picker.component.html',
  styleUrls: ['./faction-picker.component.scss']
})
export class FactionPickerComponent implements OnInit {
  factions: any;
  army_types: any;
  chosen_faction: number;
  constructor(private dataService: TercioDataService) { }

  ngOnInit() {
    this.factions = this.dataService.getFactions();
    this.army_types = this.dataService.getArmyTypes();
  }

  getTypeById(id: string){
    return this.dataService.getArmyTypeById(id);
  }
}

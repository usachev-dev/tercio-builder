import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { UnitComponent } from '../unit/unit.component';
import { TercioDataService } from "../tercio-data.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-regiment',
  templateUrl: './regiment.component.html',
  styleUrls: ['./regiment.component.scss'],
  inputs: ['regiment_data','regiment_index']
})
export class RegimentComponent implements OnInit {
  regiment_data: any;
  regiment_index: number;
  units: string[];
  companies: string[];
  units_available: string[];
  companies_available: string[];

  constructor(private dataService: TercioDataService) { }

  @Output()
  delete_regiment: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    console.log(this.regiment_data);
  }
  deleteRegiment(){
    this.delete_regiment.emit(this.regiment_index)
  }
  addUnit(type: string){
    this.units.push(type);
  }
  addCompany(type: string){
    this.companies.push(type);
  }
  updateAvailableUnits(){

  }
  updateAvailableCompanies(){

  }
  initRegiment(){
    if (this.regiment_data.min_units  && !_.isUndefined(this.regiment_data.units_available[0])) {
      for (let i = 0; i < this.regiment_data.min_units; i++) {
        this.addUnit(this.regiment_data.units_available[0]);
      }
    }
    if (this.regiment_data.min_companies  && !_.isUndefined(this.regiment_data.companies_available[0])) {
      for (let i = 0; i < this.regiment_data.min_companies; i++) {
        this.addCompany(this.regiment_data.companies_available[0]);
      }
    }
  }
}


import {Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList} from '@angular/core';
import { UnitComponent } from '../unit/unit.component';
import { CommanderComponent } from '../commander/commander.component';
import { TercioDataService } from "../tercio-data.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-regiment',
  templateUrl: './regiment.component.html',
  styleUrls: ['./regiment.component.scss'],
  inputs: ['regiment_data','regiment_index','faction']
})
export class RegimentComponent implements OnInit {
  regiment_data: any;
  regiment_index: number;
  units: string[] = [];
  companies: string[] = [];
  units_available: any[];
  companies_available: string[];
  faction: string;

  @ViewChildren(UnitComponent) units_query: QueryList<UnitComponent>;
  @ViewChildren(CommanderComponent) commander_query: QueryList<CommanderComponent>;

  cost: number;


  constructor(private dataService: TercioDataService) { }

  @Output()
  delete_regiment: EventEmitter<number> = new EventEmitter();
  @Output()
  update_cost: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.initRegiment();
  }
  ngAfterViewInit() {
    this.updateCost();
  }
  deleteRegiment(){
    this.delete_regiment.emit(this.regiment_index)
  }
  addUnit(type: string){
    this.units.push(type);
    this.updateAvailableUnits();
    this.updateAvailableCompanies();
    this.updateCost();
  }
  addCompany(type: string){
    this.companies.push(type);
    this.updateAvailableCompanies();
    this.updateCost();
  }
  updateAvailableUnits(): void {
    let temp: any[], result: any[] = [];
    switch (true){
      case (this.units.length >= this.regiment_data.max_units):
        temp = [];
        break;
      case (this.regiment_data.same_unit!==false && this.units.length > 0):
        temp = [this.units[0]];
        break;
      case (this.regiment_data.same_unit===true && this.units.length < this.regiment_data.max_units):
        temp = this.regiment_data.units_available;
        break;
      case (this.units.length === 0):
        temp = this.regiment_data.units_available;
        break;
    }
    _.each(temp, (id)=>{
      result.push ({id: id, title: this.dataService.getUnitById(id).title});
    });

    this.units_available = result;

  }
  updateAvailableCompanies(): void {
    let temp: any[], result: any[] = [];
    switch (true){
      case (this.companies.length < this.getMaxCompanies()):
        temp = this.regiment_data.companies_available;
        break;
      case (this.companies.length >= this.getMaxCompanies() ||
        this.regiment_data.companies_available.lenght === 0):
        temp = [];
        break;
    }
    _.each(temp, (id)=>{
      result.push ({id: id, title: this.dataService.getUnitById(id).title});
    });
    this.companies_available = result;
  }
  getMaxCompanies(){
    if(this.regiment_data.companies_limit === 'units'){
      return Math.min(this.regiment_data.max_companies, this.units.length);
    } else {
      return this.regiment_data.max_companies;
    }

  }
  initRegiment(){
    this.updateAvailableUnits();
    this.updateAvailableCompanies();
  }
  deleteUnit(index: number): void{
    this.units.splice(index,1);
    this.updateAvailableUnits();
    this.updateCost();
  }
  deleteCompany(index: number): void{
    this.companies.splice(index,1);
    this.updateAvailableCompanies();
    this.updateCost();
  }
  updateCost(){
    setTimeout(() => {
      this.cost = this.units_query.reduce((sum,value)=>sum+value.cost,0);
      this.cost += this.commander_query.reduce((sum,value)=>sum+value.cost,0);
      }, 0);
    this.update_cost.emit();
  }
  isEmpty(o: any){
    return _.isEmpty(o);
  }
}


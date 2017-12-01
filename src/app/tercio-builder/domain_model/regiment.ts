import { TercioDataService } from "../tercio-data.service";
import { commanderData, regimentData, unitAvailableData } from "./interfaces";
import { Unit } from "./unit";
import { Commander } from "./commander";
import * as _ from 'lodash';

export class Regiment {
  data: TercioDataService;

  get cost(): number {
    let result;
    result = this.units.reduce((sum, value) => sum + value.cost, 0);
    result += this.companies.reduce((sum, value) => sum + value.cost, 0);
    if (this.commander && this.commander.cost) {
      result += this.commander.cost;
    }
    return result;
  }

  regiment_data: regimentData;
  regiment_index: number;
  faction: string;

  commander: Commander;
  companies: Unit[] = [];
  companies_available: unitAvailableData[] = [];
  units: Unit[] = [];
  units_available: unitAvailableData[] = [];


  constructor(
    data: TercioDataService,
    regiment_data: regimentData,
    regiment_index: number,
    faction: string,
    saved_regiment?: any
  ){
    this.data = data;
    this.regiment_data = regiment_data;
    this.regiment_index = regiment_index;
    this.faction = faction;
    if ( saved_regiment ) {
      this.load(saved_regiment);
    } else {
      if (!_.isEmpty(regiment_data.commander) &&
        !_.isNull(regiment_data.commander) &&
        !_.isUndefined(regiment_data.commander)){
        this.commander = new Commander(data, regiment_data.commander);
      }
      this.updateAvailableUnits();
      this.updateAvailableCompanies();
    }
  }

  checkForAdditionalUnits(): boolean {
    let main: number = 0;
    if (!_.isArray(this.regiment_data.additional_units)){
      return false;
    } else {
      //посчитаем основные юниты в регименте
      _.each(this.units, (unit)=>{
        if (_.includes(this.regiment_data.units_available, unit.unit_data.id)){
          main++;
        }
      });
      return ((this.units.length - main)<main);
    }
  }

  updateAvailableUnits(): void {
    let temp: any[], result: any[] = [];
    switch (true){
      case (this.units.length >= this.regiment_data.max_units):
        temp = [];
        break;
      case (this.regiment_data.same_unit!==false && this.units.length > 0):
        temp = [this.units[0].unit_data.id];
        if (this.checkForAdditionalUnits()){
          temp = _.concat(temp, this.regiment_data.additional_units);
        }
        break;
      case (this.regiment_data.same_unit===false && this.units.length < this.regiment_data.max_units):
        temp = this.regiment_data.units_available;
        if (this.checkForAdditionalUnits()){
          temp = _.concat(temp, this.regiment_data.additional_units);
        }
        break;
      case (this.units.length === 0):
        temp = this.regiment_data.units_available;
        break;
    }
    _.each(temp, _.bind((id: string)=>{
      //debugger;
      result.push ({id: id, title: this.data.getUnitById(id).title});
    }, this));
    this.units_available = result;

  }
  updateAvailableCompanies(): void {
    let temp: any[], result: any[] = [];
    switch (true){
      case (this.companies.length < this.getMaxCompanies()):
        temp = this.regiment_data.companies_available;
        break;
      case (this.companies.length >= this.getMaxCompanies() ||
        this.regiment_data.companies_available.length === 0):
        temp = [];
        break;
    }
    _.each(temp, (id)=>{
      result.push ({id: id, title: this.data.getUnitById(id).title});
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
  deleteUnit(index: number): void{
    this.units.splice(index,1);
    this.updateAvailableUnits();
  }
  deleteCompany(index: number): void{
    this.companies.splice(index,1);
    this.updateAvailableCompanies();
  }
  addUnit(type: string){
    this.units.push(new Unit(this.data, this.faction, type, false));
    this.updateAvailableUnits();
    this.updateAvailableCompanies();
  }
  addCompany(type: string){
    this.companies.push(new Unit(this.data, this.faction, type, true));
    this.updateAvailableCompanies();
  }
  save(){
    return this;
  }
  load(saved_regiment: any){
    if (saved_regiment.commander){
      this.commander = new Commander (this.data, this.regiment_data.commander, saved_regiment.commander);
    }
    _.each(saved_regiment.units, (unit: any)=>{
      this.units.push(
        new Unit(this.data, this.faction, unit.unit_data.id, unit.is_company, unit)
      )
    });
    _.each(saved_regiment.companies, (unit: any)=>{
      this.companies.push(
        new Unit(this.data, this.faction, unit.unit_data.id, unit.is_company, unit)
      )
    });
    this.updateAvailableUnits();
    this.updateAvailableCompanies();
  }
}

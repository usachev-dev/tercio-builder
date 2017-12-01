import { TercioDataService } from "../tercio-data.service";
import {  unitData, option, stats } from "./interfaces";
import * as _ from 'lodash';

export class Unit {
  cost: number;
  cost_base: number;
  unit_data: unitData;
  faction: string;

  options_all: option[];
  options_available: option[];
  options_chosen: option[] = [];
  rules: string[];
  rules_base: string[];
  stats: stats;
  stats_base: stats;
  //unit_type: string;
  weaponry: string[];
  weaponry_base: string[];
  is_company: boolean;

  constructor(
    data: TercioDataService,
    faction: string,
    unit_type: string,
    is_company: boolean,
    saved_unit?: any
  ){
    this.unit_data = data.getUnitData(unit_type, faction);
    this.cost_base = this.unit_data.base_cost;
    this.stats_base = this.unit_data.stats;
    this.rules_base = this.unit_data.rules;
    this.weaponry_base = this.unit_data.weaponry;
    this.options_all = this.unit_data.options;
    this.is_company = is_company;
    if (saved_unit){
      this.load(saved_unit);
    } else {
      this.initValues();
      this.updateAvailableOptions();
    }
  }

  initValues(){
    this.cost = _.cloneDeep(this.cost_base);
    this.stats = _.cloneDeep(this.stats_base);
    this.rules = _.cloneDeep(this.rules_base);
    this.weaponry = _.cloneDeep(this.weaponry_base);
  }

  updateAvailableOptions(){
    this.options_available = _.difference(this.options_all, this.options_chosen);

    //убираем опции, несовместимые с добавленными
    _.each(this.options_chosen, (option: any)=>{
      _.each(option.not_with, (o: string)=>{
        _.remove(this.options_available, (o_a: any)=>{
          return o_a.id == o;
        })
      });
    });
    //убираем опции, для которых требуется опция, которая не выбрана
    _.remove(this.options_available, (option: any, index: number)=>{
      return (!_.isEmpty(option.with_option)
        &&
        !(_.find(this.options_chosen,(o)=>{
          return _.includes(option.with_option,o.id)
        })))
    });
  }

  addOption(option_id: string){
    this.options_chosen.push(_.find(this.options_all, (o: any)=>{return o.id == option_id}));
    this.updateWithOptions();
    this.updateAvailableOptions();
  }
  removeOption(option_id: string){
    _.remove(this.options_chosen, (o: any)=>{return o.id == option_id});
    this.updateWithOptions();
    this.updateAvailableOptions();
  }
  updateWithOptions(){
    this.initValues();
    _.each(this.options_chosen, (option)=>{
      this.cost = this.cost + option.cost;
      _.extend(this.stats, option.stats);
      this.rules = _.union(this.rules, option.rules);
      this.rules = _.difference(this.rules, option.rules_loss);
      this.weaponry = _.union(this.weaponry, option.weaponry);
      this.weaponry = _.difference(this.weaponry, option.weaponry_loss);
      //this.glossary = _.concat(this.weaponry, this.rules);
    });
  }
  load(saved_unit: any){
    _.extend(this,saved_unit);
  }
}

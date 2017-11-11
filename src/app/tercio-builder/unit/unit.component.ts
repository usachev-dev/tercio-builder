import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TercioDataService } from "../tercio-data.service";

import * as _ from 'lodash';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  inputs: ['unit_type', 'is_company', 'faction']
})
export class UnitComponent implements OnInit {
  unit_type: string;
  is_company: boolean;

  data: any;

  cost_base: number;
  stats_base: any;
  rules_base: any;
  weaponry_base: any;

  cost: number;
  stats: any;
  rules: any;
  weaponry: any;
  glossary: string[];

  options_all: any[];
  options_available: any[];
  options_chosen: any[] = [];

  options_open: boolean;

  faction: string;
  @Output()
  delete_unit: EventEmitter<number> = new EventEmitter();
  @Output()
  delete_company: EventEmitter<number> = new EventEmitter();
  @Output()
  update_cost: EventEmitter<number> = new EventEmitter();
  // @Output()
  // update_glossary: EventEmitter<string[]> = new EventEmitter();

  constructor(private dataService: TercioDataService) { }

  ngOnInit() {
    this.data = this.dataService.getUnitData(this.unit_type, this.faction);

    this.cost_base = this.data.base_cost;
    this.stats_base = this.data.stats;
    this.rules_base = this.data.rules;
    this.weaponry_base = this.data.weaponry;

    this.initValues();

    this.options_all = this.data.options;
    this.updateAvailableOptions();
    //debugger;
  }

  deleteUnit(){
    if (this.is_company){
      this.delete_company.emit();
    } else {
      this.delete_unit.emit()
    }
  }

  initValues(){
    this.cost = _.cloneDeep(this.cost_base);
    this.stats = _.cloneDeep(this.stats_base);
    this.rules = _.cloneDeep(this.rules_base);
    this.weaponry = _.cloneDeep(this.weaponry_base);
    this.glossary = _.concat(this.rules_base,this.weaponry_base);
    this.update_cost.emit();

  }
  addOption(option_id: string){
    this.options_chosen.push(_.find(this.options_all, (o: any)=>{return o.id == option_id}));
    this.updateWithOptions();
    this.updateAvailableOptions();
    this.update_cost.emit();
    //this.update_glossary.emit();
  }
  removeOption(option_id: string){
    _.remove(this.options_chosen, (o: any)=>{return o.id == option_id});
    this.updateWithOptions();
    this.updateAvailableOptions();
    this.update_cost.emit();
    //this.update_glossary.emit();
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
      this.glossary = _.concat(this.weaponry, this.rules);
    });
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
}


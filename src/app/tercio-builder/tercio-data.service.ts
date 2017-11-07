import { Injectable } from '@angular/core';
import * as data from './data'
import * as _ from 'lodash';

@Injectable()
export class TercioDataService {
  data: any;

  choseFaction(faction: string){
    //this.faction_data = data.factionData[faction];
  }

  getFactions(){
    return _.sortBy(this.data.factionData, (faction: any)=>{return faction.sort});
  }
  getFactionById(id: string){
    return _.find(this.data.factionData, (o: any)=>{return o.id===id});
  }
  getArmyTypes(){
    return this.data.armyTypeData;
  }
  getArmyTypeById(id: string){
    return _.find(this.data.armyTypeData, (o: any)=>{return o.id === id})
  }




  getRegimentData(faction_id: string){
    function modifyRegiment (regiment: any, mod: any){
      _.each(regiment, (value: any, key)=>{
        if(mod[key]){
          if(_.isArray(value)){
            regiment[key] = _.concat(value,mod[key]);
          } else {
            regiment[key] = mod[key];
          }
        }
      });
      return regiment;
    }

    let regiment_mods = this.getFactionById(faction_id).regiment_modifiers,
      regiment_data = _.clone(this.data.regimentData);
    _.each(regiment_mods, (regiment_mod: any, key)=>{
      let regiment = _.find(regiment_data,(o: any)=>{return o.id===key});
      regiment = modifyRegiment(regiment, regiment_mod);
    });

    return regiment_data;
  }
  getRegimentById(id: string){
    return _.find(this.data.regimentData,(o: any)=>{return o.id === id});
  }
  getUnitById(id: string){
    return _.find(this.data.unitData,(o: any)=>{return o.id === id})
  }
  getUnitData(unit_id: string, faction_id: string){
    let unit = _.find(this.data.unitData,(o: any)=>{return o.id===unit_id}),
      faction_mods = _.find(this.data.factionData,(o: any)=>{return o.id===faction_id}).unit_modifiers,
      unit_faction_mods = faction_mods[unit_id] ? faction_mods[unit_id].options : [],
      options = this.data.optionData[unit_id] || {default_options:[]};

    let option_list = options.default_options.concat(_.compact(unit_faction_mods));
    let result = _.cloneDeep(unit);
    result.options = [];

    _.each(option_list,(o)=>{
      result.options.push (
        _.extend({id:o, stats:{}, cost:0, rules:[], weaponry:[], not_with:[]}, options.options[o]));
    });
    return result;

  }

  initData(){
    this.data  = _.cloneDeep(data);
  }
  constructor() {
    this.initData();
  }

}

import { Injectable } from '@angular/core';
import * as data from './data/data'
import * as _ from 'lodash';

@Injectable()
export class TercioDataService {
  data: any;
  glossary: any[];

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

  getArmyTypeForFaction(army_type_id: string, faction_id: string){
    let army_type_data = this.getArmyTypeById(army_type_id),
      faction_data: any = this.getFactionById(faction_id);

    _.each(faction_data.regiment_modifiers, (mod: any, key: string)=>{
      if (mod.instead_of) {
        army_type_data.regiments.push({id:key, instead_of:mod.instead_of});
      }
    });
    return army_type_data;
  }


  getRegimentData(faction_id: string){
    function modifyRegiment (regiment: any, mod: any){
      _.each(regiment, (value: any, key: string)=>{
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
        _.extend({
          id:o,
          stats:{},
          cost:0,
          rules:[],
          rules_loss:[],
          weaponry:[],
          weaponry_loss:[],
          not_with:[],
          with_option:[]
        }, options.options[o]));
    });
    return result;

  }


  getTraits(){
    return _.sortBy(this.data.traits,(o: any)=>{return o.id});
  }
  getVirtues(){
    return _.sortBy(this.data.virtues,(o: any)=>{return o.id})
  }
  initData(){
    this.data  = _.cloneDeep(data);
    this.glossary = _.concat(this.data.traits, this.data.virtues, this.data.rules, this.data.weaponry)
  }
  constructor() {
    this.initData();
  }

}

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




  getRegimentData(faction_id: string, army_type_id: string){
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
      regiment_data = this.data.regimentData;
    _.each(regiment_mods, (regiment_mod: any, key)=>{
      let regiment = _.find(regiment_data,(o: any)=>{return o.id===key});
      regiment = modifyRegiment(regiment, regiment_mod);
    });

    return regiment_data;
  }
  getRegimentById(id: string){
    return _.find(this.data.regimentData,(o: any)=>{return o.id === id})
  }


  initRoster(army_type: any){

  }

  constructor() {
    this.data  = data;
  }

}

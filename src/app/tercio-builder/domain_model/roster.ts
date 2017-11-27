import { TercioDataService } from "../tercio-data.service";
import { armyTypeData, regimentData, commanderData } from './interfaces'
import { Regiment } from "./regiment";
import { Commander } from "./commander";
import * as _ from 'lodash';

export class Roster {
  data: TercioDataService;

  get cost(): number {
    let result;
    result = this.regiments.reduce((sum,value)=>sum+value.cost,0);
    result += this.cnc.cost;
    return result;
  };

  faction: string;
  faction_title: string;
  armyTypeData: armyTypeData;
  //armyTypeDataNew: armyTypeData;
  regimentData: regimentData[];
  cnc: Commander;
  regiments: Regiment[] = [];
  availableRegiments: regimentData[] = [];

  constructor(data: TercioDataService,
              faction: string,
              army_type: string,
              saved_roster?: any
  ){
    this.data = data;
    this.faction = faction;
    this.faction_title = this.data.getFactionById(this.faction).title;
    //this.armyTypeData = data.getArmyTypeById(army_type);
    this.armyTypeData = data.getArmyTypeForFaction(army_type, faction);
    this.regimentData = data.getRegimentData(this.faction);
    this.availableRegiments = this.getAvailableRegiments();

    if (saved_roster){
      this.loadRoster(saved_roster);
    } else {
      this.cnc = new Commander(this.data, this.armyTypeData.commander);
      _.each(this.armyTypeData.regiments, (regiment_type: any)=>{
        for(let i=0;i<regiment_type.min; i++){
          let regiment_data = _.find(this.regimentData, (o: any)=>{return o.id === regiment_type.id});
          if(regiment_data){
            this.regiments.push(new Regiment(this.data, regiment_data, this.regiments.length, this.faction));
          }
        }
      });
    }
  }

  getRegimentNumber(regType?: string): number{
    if (regType){
      let result = 0;
      _.each(this.regiments, (o: any)=>{
        if (o.regiment_data.id === regType || o.regiment_data.instead_of === regType){
          result++;
        }
      });
      return result;
    } else {
      return this.regiments.length;
    }
  }

  addRegiment(regiment_id: string){
    let regiment_data = _.find(this.regimentData, (o: any)=>{return o.id === regiment_id});
    this.regiments.push(new Regiment(this.data, regiment_data, this.regiments.length, this.faction));
    this.availableRegiments = this.getAvailableRegiments();
  }

  getRegimentById(id: string){
    return _.find(this.regimentData,(o: any)=>{return o.id === id})
  }

  deleteRegiment(index: number): void{
    this.regiments.splice(index,1);
  }

  getAvailableRegiments(){
    let result: regimentData[] = [];
    _.each(this.regimentData, (regiment_type: any)=>{
      let found = _.find(this.armyTypeData.regiments,(o: any)=>{return o.id===regiment_type.id});
      let instead: any;
      let limit;
      if(found){
        if (found.instead_of){
          instead = _.find(this.armyTypeData.regiments,(o: any)=>{return o.id===found.instead_of});
          limit = instead.max;
          if(this.getRegimentNumber(instead.id)<limit){
            result.push(regiment_type);
          }
        } else {
          limit=found.max;
          if(this.getRegimentNumber(regiment_type.id)<limit){
            result.push(regiment_type);
          }
        }
      }
    });
    return result;
    // _.each(this.regimentData, (regiment_type: any)=>{
    //   let found = _.find(this.armyTypeData.regiments,(o: any)=>{return o.id===regiment_type.id});
    //   let limit;
    //   found ? limit=found.max : limit=0;
    //   if(this.getRegimentNumber(regiment_type.id)<limit){
    //     result.push(regiment_type);
    //   }
    // });
    // return result;
  }

  saveRoster(){
    let result: any;
    result = {
      faction: this.faction,
      army_type: this.armyTypeData.id,
      faction_title: this.faction_title,
      army_type_title: this.armyTypeData.title,
      date: new Date(),
      cost: this.cost,
      cnc: this.cnc.save(),
      regiments: []
    };
    _.each(this.regiments, (regiment)=>{
      result.regiments.push(regiment.save());
    });
    return result;
  }
  loadRoster(roster_data: any){
    this.cnc = new Commander(this.data, this.armyTypeData.commander, roster_data.cnc);
    _.each(roster_data.regiments, (regiment: any)=>{
      let regiment_data = _.find(this.regimentData, (o: any)=>{return o.id === regiment.regiment_data.id});
      this.regiments.push(new Regiment(this.data, regiment_data, this.regiments.length, this.faction, regiment));
    })
  }

}

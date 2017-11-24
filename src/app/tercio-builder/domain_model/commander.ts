import { TercioDataService } from "../tercio-data.service";
import { commanderData, traitData } from "./interfaces";
import * as _ from 'lodash';

export class Commander {
  data: TercioDataService;
  commander_data: commanderData;
  cost: number = 0;
  rank: number;

  traits: traitData[] = [];
  traits_all: traitData[];
  traits_available: traitData[];

  filter_value: string = '';

  virtues: traitData[] = [];
  virtues_all: traitData[];
  virtues_available: traitData[];

  number_of_traits =  {
    0:0,
    1:1,
    2:1,
    3:2,
    4:2,
    5:3
  };

  number_of_virtues  = {
    0:0,
    1:0,
    2:1,
    3:1,
    4:2,
    5:2
  };

  constructor (
    data: TercioDataService,
    commander_data: commanderData,
    saved_commander?: any
  ) {
    this.data = data;
    this.commander_data = commander_data;

    if ( saved_commander ) {
      this.load(saved_commander)
    } else {
      this.traits_all = this.data.getTraits();
      this.virtues_all = this.data.getVirtues();
      this.rank = this.commander_data.min_rank;
      this.updateCost();

      this.virtues_available = this.virtues_all;
      this.traits_available = this.traits_all;
    }
  }
  updateCost(){
    this.cost = this.commander_data.cost[this.rank];
  }
  rankReduce(){
    this.rank--;
    this.updateCost();
  }
  rankIncrease(){
    this.rank++;
    this.updateCost();
  }
  addTrait(trait: traitData){
    this.traits.push(trait);
    this.updateTraitsAvailable();
  }
  addVirtue(virtue: traitData){
    this.virtues.push(virtue);
    this.updateVirtuesAvailable();
  }
  updateTraitsAvailable() {
    this.traits_available = _.difference(this.traits_all, this.traits);
    _.remove(this.traits_available,(o:any)=>{
      return !checkForSting(o,this.filter_value);
    });
  }
  updateVirtuesAvailable() {
    this.virtues_available = _.difference(this.virtues_all, this.virtues);
    _.remove(this.virtues_available,(o:any)=>{
      return !checkForSting(o,this.filter_value);
    });
  }
  removeTrait(trait: any){
    _.remove(this.traits, (o)=>{return o===trait});
    this.updateTraitsAvailable();
  }
  removeVirtue(virtue: any){
    _.remove(this.virtues, (o)=>{return o===virtue});
    this.updateVirtuesAvailable();
  }
  save(){
    return this;
  }
  load(saved_commander: any){
    _.extend(this,saved_commander);
  }
}

function checkForSting(object: any, string: string){
  let result: boolean = false;
  string = _.lowerCase(string);
  for(let prop in object){
    if (_.includes(_.lowerCase(object[prop]), string)){
      result = true;
      break;
    }
  }
  return result;
}

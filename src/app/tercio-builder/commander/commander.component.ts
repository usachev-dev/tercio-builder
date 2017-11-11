import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { TercioDataService } from "../tercio-data.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss'],
  inputs: ['commander_data']
})
export class CommanderComponent implements OnInit {
  commander_data: any;
  modal_open: boolean = false;
  filter_value: string = '';

  rank: number;
  cost: number;

  virtues: any[] = [];
  traits: any[] = [];

  virtues_all: any[];
  virtues_available: any[];

  traits_all: any[];
  traits_available: any[];

  number_of_traits: any = {
    0:0,
    1:1,
    2:1,
    3:2,
    4:2,
    5:3
  };
  number_of_virtues: any = {
    0:0,
    1:0,
    2:1,
    3:1,
    4:2,
    5:2
  };

  chosen_item: any = {description: 'Click on item to see description'};

  constructor(private dataService: TercioDataService) { }

  ngOnInit() {
    this.traits_all = this.dataService.getTraits();
    this.virtues_all = this.dataService.getVirtues();
    this.rank = this.commander_data.min_rank;
    this.updateCost();

    this.virtues_available = this.virtues_all;
    this.traits_available = this.traits_all;

  }

  @Output()
  update_cost: EventEmitter<number> = new EventEmitter();

  updateCost(){
    this.cost = this.commander_data.cost[this.rank];
    this.update_cost.emit();
  }
  openModal(){
    this.modal_open = true;
  }
  closeModal(event: any){
    this.modal_open = false;
  }

  rankReduce(){
    this.rank--;
    this.updateCost();
  }
  rankIncrease(){
    this.rank++;
    this.updateCost();
  }

  addTrait(trait: any){
    this.traits.push(trait);
    this.updateTraitsAvailable();
  }
  addVirtue(virtue: any){
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
  }
  removeVirtue(virtue: any){
    _.remove(this.virtues, (o)=>{return o===virtue});
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

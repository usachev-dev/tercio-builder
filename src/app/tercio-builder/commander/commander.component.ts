import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { TercioDataService } from "../tercio-data.service";

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss'],
  inputs: ['commander_data']
})
export class CommanderComponent implements OnInit {
  commander_data: any;
  modal_open = false;

  rank: number;
  cost: number;

  virtues: any[];
  traits: any[];

  virtues_all: any[];
  virtues_available: any[];

  traits_all: any[];
  traits_available: any[];

  constructor(private dataService: TercioDataService) { }

  ngOnInit() {
    this.traits_all = this.dataService.getTraits();
    this.virtues_all = this.dataService.getVirtues();
    this.rank = this.commander_data.min_rank;
    this.updateCost();
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
}

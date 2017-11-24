import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { TercioDataService } from "../tercio-data.service";
import* as _ from 'lodash';
import { Commander } from "../domain_model/commander";

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss'],
  inputs: [ 'commander']
})
export class CommanderComponent implements OnInit {

  commander: Commander;

  modal_open: boolean = false;

  chosen_item: any = {description: 'Click on item to see description'};

  constructor(private dataService: TercioDataService) { }

  ngOnInit() {
  }

  @Output()
  update_cost: EventEmitter<number> = new EventEmitter();

  openModal(){
    this.modal_open = true;
  }
  closeModal(event: any){
    this.modal_open = false;
  }

}

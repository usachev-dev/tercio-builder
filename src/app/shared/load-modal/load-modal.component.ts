import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SaveService } from "../../core/save.service";
import * as moment from 'moment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-load-modal',
  templateUrl: './load-modal.component.html',
  styleUrls: ['./load-modal.component.scss'],
  inputs: ['open']
})
export class LoadModalComponent implements OnInit {
  open: boolean;

  constructor(
    private saveService: SaveService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  @Output()
  close_modal: EventEmitter<number> = new EventEmitter();
  closeMe(){
    this.close_modal.emit();
  }

  deleteSavedRoster(index: number){
    this.saveService.deleteSavedRoster(index);
  }

  get saved(): any {
    return this.saveService.saved;
  }

  loadRoster(index: number){
    this.router.navigate(['/roster/load/'+index]);
    this.closeMe();
  }

  parseDate(date: string){
    return moment(date).calendar();
  }

}

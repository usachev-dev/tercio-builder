import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { TercioDataService } from "../tercio-data.service";
import * as moment from 'moment';
import * as _ from 'lodash';

import { Roster } from '../domain_model/roster'
import { SaveService } from "../../core/save.service";

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {

  faction: string;
  army_type: string;

  roster: Roster;

  load_modal_open: boolean = false;
  checkmark_show: boolean = false;
  save_warning_show = false;

  get saved(): any {
    return this.saveService.saved;
  }
  glossary: string[] = [];


  constructor(
    private route: ActivatedRoute,
    private dataService: TercioDataService,
    private saveService: SaveService,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.dataService.initData();
    if (this.route.snapshot.data.loading) {
      let index = 0;
      this.route.params.subscribe(params => {
        index = params['roster_index'];
        this.loadRoster(index);
        this.load_modal_open = false;
      });
    } else {
      this.route.params.subscribe(params => {
        this.faction = params['faction'];
        this.army_type = params['army_type'];
      });
      this.roster = new Roster(this.dataService, this.faction, this.army_type);
    }
  }

  saveRoster(){
    if (this.saved.length > 10) {
      this.save_warning_show = true;
      setTimeout(()=>{
        this.save_warning_show = false;
      }, 5000)
    } else {
      this.saveService.saveRoster(this.roster.saveRoster());
      this.checkmark_show = true;
      setTimeout(()=>{
        this.checkmark_show = false;
      }, 2000)
    }
  }

  loadRoster(index: number){
    let saved_roster = this.saveService.loadRoster(index);
    if (!_.isEmpty(saved_roster) && !_.isUndefined(saved_roster) && !_.isNull(saved_roster)){
      this.roster = new Roster(this.dataService, saved_roster.faction, saved_roster.army_type, saved_roster );
      this.toggleLoadModal();
    } else {
      this.router.navigate(['/']);
    }
  }

  toggleLoadModal(){
    this.load_modal_open=!this.load_modal_open;
  }

  isEmpty(o: any){
    return _.isEmpty(o);
  }
}

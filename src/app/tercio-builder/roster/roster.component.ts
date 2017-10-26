import { Component, OnInit } from '@angular/core';
import { RegimentComponent } from '../regiment/regiment.component';
import { ActivatedRoute } from '@angular/router';
import { TercioDataService } from "../tercio-data.service";
import * as _ from 'lodash';
@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {

  regiments: any[];
  faction: string;
  army_type: string;
  armyTypeData: any;
  regimentData: any;
  addingRegiment: boolean = false;
  availableRegiments: any[];

  plusButton(e: any){
    this.addingRegiment = true;
    e.stopPropagation();
  }
  getAvailableRegiments(){
    let result:any[] = [];
    _.each(this.regimentData, (regiment_type: any)=>{
      let limit = _.find(this.armyTypeData.regiments,(o: any)=>{return o.id===regiment_type.id}).max;
      if(this.getRegimentNumber(regiment_type.id)<limit){
        result.push(regiment_type);
      }
    });
    return result;
  }
  addRegiment(regiment_id: string){
    let regiment = _.find(this.regimentData, (o: any)=>{return o.id === regiment_id});
    this.regiments.push(regiment);
    this.availableRegiments = this.getAvailableRegiments();
  }
  getRegimentById(id: string){
    return _.find(this.regimentData,(o: any)=>{return o.id === id})
  }
  deleteRegiment(index: number): void{
    this.regiments.splice(index,1);
  }

  getRegimentNumber(type?: string): number{
    if (type){
      let result = 0;
      _.each(this.regiments, (o)=>{
        if (o.id === type){
          result++;
        }
      });
      return result;
    } else {
      return this.regiments.length;
    }
  }
  constructor(
    private route: ActivatedRoute,
    private dataService: TercioDataService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.faction = params['faction'];
      this.army_type = params['army_type'];
    });
    this.armyTypeData = this.dataService.getArmyTypeById(this.army_type);
    this.regimentData = this.dataService.getRegimentData(this.faction, this.army_type);
    this.regiments = [];
    this.availableRegiments = this.getAvailableRegiments();
    this.initRoster();
  }

  initRoster(){
    _.each(this.armyTypeData.regiments, (regiment_type: any)=>{
      for(let i=0;i<regiment_type.min; i++){
        let regiment = _.find(this.regimentData, (o: any)=>{return o.id === regiment_type.id});
        if(regiment){
          this.regiments.push(regiment);
        }
      }
    });
  }
}

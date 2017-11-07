import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
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
  availableRegiments: any[];

  cost:number = 0;

  @ViewChildren(RegimentComponent) regiments_query: QueryList<RegimentComponent>;
  updateCost(){
    setTimeout(() => { this.cost = this.regiments_query.reduce((sum,value)=>sum+value.cost,0); }, 0);
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
    this.updateCost();
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
  getFactionTitle() {
    return this.dataService.getFactionById(this.faction).title;
  }
  getArmyTypeTitle() {
    return this.dataService.getArmyTypeById(this.army_type).title;
  }
  constructor(
    private route: ActivatedRoute,
    private dataService: TercioDataService) {

  }

  ngOnInit() {
    this.dataService.initData();
    this.route.params.subscribe(params => {
      this.faction = params['faction'];
      this.army_type = params['army_type'];
    });
    this.armyTypeData = this.dataService.getArmyTypeById(this.army_type);
    this.regimentData = this.dataService.getRegimentData(this.faction);
    this.regiments = [];
    this.availableRegiments = this.getAvailableRegiments();
    this.initRoster();
  }
  ngAfterViewInit() {
    this.updateCost();
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

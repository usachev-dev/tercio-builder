import { Component, OnInit } from '@angular/core';
import { RegimentComponent } from '../regiment/regiment.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {

  regiments: RegimentComponent[] = [];
  faction: string;
  addRegiment(){
    this.regiments.push(new RegimentComponent());
  }
  deleteRegiment(){

  }
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.faction = params['title']; // --> Name must match wanted parameter
    });

  }

}

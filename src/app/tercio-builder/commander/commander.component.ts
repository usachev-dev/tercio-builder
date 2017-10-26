import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss'],
  inputs: ['rank']
})
export class CommanderComponent implements OnInit {
  rank: number;

  constructor() { }

  ngOnInit() {
  }

}

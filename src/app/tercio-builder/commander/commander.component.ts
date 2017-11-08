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

  constructor() { }

  ngOnInit() {
  }

}

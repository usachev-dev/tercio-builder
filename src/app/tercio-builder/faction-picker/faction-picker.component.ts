import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { factionData } from "./data";

@Component({
  selector: 'app-faction-picker',
  templateUrl: './faction-picker.component.html',
  styleUrls: ['./faction-picker.component.scss']
})
export class FactionPickerComponent implements OnInit {
  factions = factionData;
  @Output() factionChosen: EventEmitter<any> = new EventEmitter();

  choseFaction(options:object){
    this.factionChosen.emit(options);
  }
  constructor() { }

  ngOnInit() {
  }

}

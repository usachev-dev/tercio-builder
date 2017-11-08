import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
  inputs: ['items','caption', 'color', 'location']
})
export class AddButtonComponent implements OnInit {
  items: any[];
  addingItem: boolean = false;
  caption: string;
  color: string = 'neutral';
  location: string = 'roster';
  @Output()
  add_item: EventEmitter<string> = new EventEmitter;

  plusButton(e: any){
    this.addingItem = true;
    e.stopPropagation();
  }
  addItem(id: string){
    this.add_item.emit(id);
    this.addingItem = false;
  }
  constructor() { }

  ngOnInit() {
  }

}

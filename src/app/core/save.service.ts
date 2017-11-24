import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class SaveService {
  data: any;

  get saved(): any{
    return this.data;
  }

  constructor() {
    this.updateSaved();
  }

  updateSaved(): any{
    let result = JSON.parse(localStorage.getItem('tercioSavedRosters'));
    if (_.isNull(result)){
      this.data = [];
    } else {
      this.data = result;
    }
  }
  setSaved(saved: any){
    localStorage.setItem('tercioSavedRosters',JSON.stringify(saved));
    this.updateSaved();
  }
  saveRoster(roster: any){
    let saved = this.data;
    saved.push(roster);
    this.setSaved(saved);
  }
  loadRoster(index: number){
    return this.data[index];
  }
  deleteSavedRoster(index: number){
    let saved = this.data;
    saved.splice(index,1);
    this.setSaved(saved);
  }
}

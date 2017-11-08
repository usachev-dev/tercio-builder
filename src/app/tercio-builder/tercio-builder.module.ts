import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TercioBuilderRoutingModule } from './tercio-builder-routing.module';

import { RosterComponent } from './roster/roster.component';
import { CommanderComponent } from './commander/commander.component';
import { RegimentComponent } from './regiment/regiment.component';
import { UnitComponent } from './unit/unit.component';
import { FactionPickerComponent } from './faction-picker/faction-picker.component';
import { AddButtonComponent } from '../controls/add-button/add-button.component';

import { TercioDataService } from "./tercio-data.service";


@NgModule({
  imports: [
    CommonModule,
    TercioBuilderRoutingModule,
    TranslateModule
  ],
  declarations: [RosterComponent, CommanderComponent, RegimentComponent, UnitComponent, FactionPickerComponent, AddButtonComponent],
  providers:[TercioDataService]
})
export class TercioBuilderModule { }

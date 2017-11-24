import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TercioBuilderRoutingModule } from './tercio-builder-routing.module';

import { RosterComponent } from './roster/roster.component';
import { CommanderComponent } from './commander/commander.component';
import { RegimentComponent } from './regiment/regiment.component';
import { UnitComponent } from './unit/unit.component';
import { FactionPickerComponent } from './faction-picker/faction-picker.component';
import { AddButtonComponent } from '../shared/add-button/add-button.component';
import { ModalComponent } from '../shared/modal/modal.component';

import { TercioDataService } from "./tercio-data.service";
import { LoadModalComponent } from '../shared/load-modal/load-modal.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    TercioBuilderRoutingModule,
    TranslateModule,
    NgbModule,
    SharedModule
  ],
  declarations: [
    RosterComponent,
    CommanderComponent,
    RegimentComponent,
    UnitComponent,
    FactionPickerComponent
  ],
  providers:[TercioDataService]
})
export class TercioBuilderModule { }

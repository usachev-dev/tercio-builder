import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TercioBuilderRoutingModule } from './tercio-builder-routing.module';

import { RosterComponent } from './roster/roster.component';
import { CommanderComponent } from './commander/commander.component';
import { RegimentComponent } from './regiment/regiment.component';
import { UnitComponent } from './unit/unit.component';
import { TercioBuilderComponent } from './tercio-builder/tercio-builder.component';

@NgModule({
  imports: [
    CommonModule,
    TercioBuilderRoutingModule,
    TranslateModule
  ],
  declarations: [RosterComponent, CommanderComponent, RegimentComponent, UnitComponent, TercioBuilderComponent]
})
export class TercioBuilderModule { }

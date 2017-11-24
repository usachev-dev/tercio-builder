import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import {FactionPickerComponent} from "./faction-picker/faction-picker.component";
import {RosterComponent} from "./roster/roster.component";

const routes: Routes = Route.withShell([
  { path: '', component: FactionPickerComponent },
  { path: 'roster/load/:roster_index', component: RosterComponent, data:{loading: true} },
  { path: 'roster/:faction/:army_type', component: RosterComponent }

]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TercioBuilderRoutingModule { }

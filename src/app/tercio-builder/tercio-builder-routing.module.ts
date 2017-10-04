import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { TercioBuilderComponent } from './tercio-builder/tercio-builder.component';

const routes: Routes = Route.withShell([
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'builder', component: TercioBuilderComponent, data: { title: extract('Home') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TercioBuilderRoutingModule { }

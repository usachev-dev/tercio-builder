import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { TercioBuilderRoutingModule } from "../tercio-builder/tercio-builder-routing.module";

import { LoaderComponent } from './loader/loader.component';
import {AddButtonComponent} from "./add-button/add-button.component";
import {ModalComponent} from "./modal/modal.component";
import {LoadModalComponent} from "./load-modal/load-modal.component";

@NgModule({
  imports: [
    CommonModule,
    TercioBuilderRoutingModule
  ],
  declarations: [
    LoaderComponent,
    AddButtonComponent,
    ModalComponent,
    LoadModalComponent
  ],
  exports: [
    LoaderComponent,
    AddButtonComponent,
    ModalComponent,
    LoadModalComponent
  ]
})
export class SharedModule { }

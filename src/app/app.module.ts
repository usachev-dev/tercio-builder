import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SaveService } from "./core/save.service";

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { TercioBuilderModule } from './tercio-builder/tercio-builder.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    TercioBuilderModule,
    SharedModule,
    AboutModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    SaveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

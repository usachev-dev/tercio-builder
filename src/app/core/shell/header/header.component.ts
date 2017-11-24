import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { LoadModalComponent } from "../../../shared/load-modal/load-modal.component";

import { I18nService } from '../../i18n.service';
import { SaveService } from "../../save.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuHidden = true;
  load_modal_open = false;

  constructor(private i18nService: I18nService,
              private saveService: SaveService
              ) { }

  ngOnInit() {
    //debugger;
  }
  toggleLoadModal(){
    //debugger;
    this.load_modal_open = !this.load_modal_open;
  }
  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get saved(): any {
    return this.saveService.saved;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

}

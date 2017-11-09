import { Component, OnInit, OnDestroy, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  inputs: ['modal_class']
})
export class ModalComponent implements OnInit, OnDestroy {
  modal_class: string = '';

  @Output()
  close_modal: EventEmitter<number> = new EventEmitter();
  constructor(private renderer: Renderer2) {
    let scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    this.renderer.addClass(document.body, 'modal-open');
    this.renderer.setStyle(document.body, 'margin-right', scrollBarWidth);

  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
    this.renderer.removeStyle(document.body, 'margin-right');
  }

  ngOnInit() {
  }

  closeModal(e: any){
    this.close_modal.emit();
    e.stopPropagation();
  }

}

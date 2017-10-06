import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionPickerComponent } from './faction-picker.component';

describe('FactionPickerComponent', () => {
  let component: FactionPickerComponent;
  let fixture: ComponentFixture<FactionPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

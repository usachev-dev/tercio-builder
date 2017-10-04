import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercioBuilderComponent } from './tercio-builder.component';

describe('TercioBuilderComponent', () => {
  let component: TercioBuilderComponent;
  let fixture: ComponentFixture<TercioBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercioBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercioBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

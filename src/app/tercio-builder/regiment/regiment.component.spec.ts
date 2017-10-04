import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimentComponent } from './regiment.component';

describe('RegimentComponent', () => {
  let component: RegimentComponent;
  let fixture: ComponentFixture<RegimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

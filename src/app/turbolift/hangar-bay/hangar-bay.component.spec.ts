/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HangarBayComponent } from './hangar-bay.component';

describe('HangarBayComponent', () => {
  let component: HangarBayComponent;
  let fixture: ComponentFixture<HangarBayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangarBayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangarBayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

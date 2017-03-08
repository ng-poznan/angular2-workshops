/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarracksComponent } from './barracks.component';

describe('BarracksComponent', () => {
  let component: BarracksComponent;
  let fixture: ComponentFixture<BarracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StormtrooperComponent } from './stormtrooper.component';

describe('StormtrooperComponent', () => {
  let component: StormtrooperComponent;
  let fixture: ComponentFixture<StormtrooperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StormtrooperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StormtrooperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

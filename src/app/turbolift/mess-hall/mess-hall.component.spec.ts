import { YodaComponent } from './../../shared/yoda/yoda.component';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MessHallComponent } from './mess-hall.component';

describe('MessHallComponent', () => {
  let component: MessHallComponent;
  let fixture: ComponentFixture<MessHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessHallComponent, YodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

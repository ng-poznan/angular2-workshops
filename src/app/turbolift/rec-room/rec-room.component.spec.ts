/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecRoomComponent } from './rec-room.component';

describe('RecRoomComponent', () => {
  let component: RecRoomComponent;
  let fixture: ComponentFixture<RecRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

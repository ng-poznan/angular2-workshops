import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarracksComponent } from './barracks.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BarracksComponent', () => {
  let component: BarracksComponent;
  let fixture: ComponentFixture<BarracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarracksComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
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

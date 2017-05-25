import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StormtrooperComponent } from './stormtrooper.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('StormtrooperComponent', () => {
  let component: StormtrooperComponent;
  let fixture: ComponentFixture<StormtrooperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StormtrooperComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StormtrooperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

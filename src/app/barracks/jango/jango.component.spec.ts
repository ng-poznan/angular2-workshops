import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JangoComponent } from './jango.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('JangoComponent', () => {
  let component: JangoComponent;
  let fixture: ComponentFixture<JangoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JangoComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

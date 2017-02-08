import { SecurityService } from './../../core/security/security.service';
import { YodaComponent } from './../../shared/yoda/yoda.component';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HangarBayComponent } from './hangar-bay.component';

describe('HangarBayComponent', () => {
  let component: HangarBayComponent;
  let fixture: ComponentFixture<HangarBayComponent>;

  beforeEach(async(() => {
    const mockedSecurityService = {};

    TestBed.configureTestingModule({
      declarations: [ HangarBayComponent, YodaComponent ],
      providers: [ {
        provide: SecurityService,
        useValue: mockedSecurityService
      }]
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

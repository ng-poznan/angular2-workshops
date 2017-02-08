import { SecurityService } from './../../core/security/security.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommandCenterComponent } from './command-center.component';

describe('CommandCenterComponent', () => {
  let component: CommandCenterComponent;
  let fixture: ComponentFixture<CommandCenterComponent>;

  beforeEach(async(() => {
    const mockedSecurityService = {};

    TestBed.configureTestingModule({
      declarations: [ CommandCenterComponent ],
      providers: [{
        provide: SecurityService,
        useValue: mockedSecurityService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

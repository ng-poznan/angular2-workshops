/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Directive, Input, Component } from '@angular/core';

import { TurboliftComponent } from './turbolift.component';

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

@Component({
  selector: 'router-outlet',
  template: ''
})
export class RouterOutletStubComponent {}

describe('TurboliftComponent', () => {
  let component: TurboliftComponent;
  let fixture: ComponentFixture<TurboliftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurboliftComponent, RouterLinkStubDirective, RouterOutletStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurboliftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StormtrooperComponent } from './stormtrooper.component';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('StormtrooperComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  const mockedStormtrooper = {
    name: 'Storm one',
    badge: {
      color: 'darkred',
      rank: 'Sgt.',
    }
  };

  @Component({
    moduleId: module.id,
    selector: 'ds-test',
    template: `<ds-stormtrooper [stormtrooper]="stormtrooper"></ds-stormtrooper>`
  })
  class TestComponent {
    stormtrooper = mockedStormtrooper;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StormtrooperComponent, TestComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should pass stormtrooper properties to badge', function () {
    expect(fixture.debugElement.query(By.css('ds-badge')).properties['badge']).toEqual(mockedStormtrooper.badge);
  });

  it('should render name', function () {
    expect(fixture.debugElement.query(By.css('ds-badge')).nativeElement.textContent).toBe(mockedStormtrooper.name);
  });
});

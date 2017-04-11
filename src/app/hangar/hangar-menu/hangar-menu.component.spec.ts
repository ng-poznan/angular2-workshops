import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangarMenuComponent } from './hangar-menu.component';

describe('HangarMenuComponent', () => {
  let component: HangarMenuComponent;
  let fixture: ComponentFixture<HangarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

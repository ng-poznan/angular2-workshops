import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCenterComponent } from './command-center.component';

describe('CommandCenterComponent', () => {
  let component: CommandCenterComponent;
  let fixture: ComponentFixture<CommandCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandCenterComponent ]
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

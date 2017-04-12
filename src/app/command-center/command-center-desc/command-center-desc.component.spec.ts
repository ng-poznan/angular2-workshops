import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCenterDescComponent } from './command-center-desc.component';

describe('CommandCenterDescComponent', () => {
  let component: CommandCenterDescComponent;
  let fixture: ComponentFixture<CommandCenterDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandCenterDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandCenterDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

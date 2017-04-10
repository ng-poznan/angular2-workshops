import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurboliftComponent } from './turbolift.component';

describe('TurboliftComponent', () => {
  let component: TurboliftComponent;
  let fixture: ComponentFixture<TurboliftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurboliftComponent ]
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

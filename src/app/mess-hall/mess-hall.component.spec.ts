import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessHallComponent } from './mess-hall.component';

describe('MessHallComponent', () => {
  let component: MessHallComponent;
  let fixture: ComponentFixture<MessHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

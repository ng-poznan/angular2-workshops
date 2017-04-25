import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDataComponent } from './base-data.component';

describe('BaseDataComponent', () => {
  let component: BaseDataComponent;
  let fixture: ComponentFixture<BaseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingQuartersComponent } from './living-quarters.component';

describe('LivingQuartersComponent', () => {
  let component: LivingQuartersComponent;
  let fixture: ComponentFixture<LivingQuartersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingQuartersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingQuartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

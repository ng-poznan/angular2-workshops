import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsComponent } from './ships.component';

xdescribe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

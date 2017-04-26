import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ds-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {

  @Input() public index: number;
  @Input() public weapon: FormGroup;
  @Output() public remove: EventEmitter<number> = new EventEmitter();

  public get name(): FormControl {
    return this.weapon.get('name') as FormControl;
  }

  public get power(): FormControl {
    return this.weapon.get('power') as FormControl;
  }

  public get weight(): FormControl {
    return this.weapon.get('weight') as FormControl;
  }

  constructor() { }

  ngOnInit() {
  }

  public removeWeapon(index: number): void {
    this.remove.emit(index);
  }

}

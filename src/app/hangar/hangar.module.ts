import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangarComponent } from './hangar.component';
import { ShipsComponent } from './ships/ships.component';
import { ShipComponent } from './ships/ship/ship.component';
import { WeaponsComponent } from './ships/ship/weapons/weapons.component';
import { WeaponComponent } from './ships/ship/weapons/weapon/weapon.component';
import { BaseDataComponent } from './ships/ship/base-data/base-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HangarComponent, ShipsComponent, ShipComponent, WeaponsComponent, WeaponComponent, BaseDataComponent]
})
export class HangarModule { }

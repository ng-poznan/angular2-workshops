import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangarComponent } from './hangar.component';
import { ShipsComponent } from './ships/ships.component';
import { ShipComponent } from './ships/ship/ship.component';
import { WeaponsComponent } from './ships/ship/weapons/weapons.component';
import { WeaponComponent } from './ships/ship/weapons/weapon/weapon.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [HangarComponent, ShipsComponent, ShipComponent, WeaponsComponent, WeaponComponent]
})
export class HangarModule { }

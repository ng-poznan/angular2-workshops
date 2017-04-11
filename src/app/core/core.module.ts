import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsService } from './services/ships.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ShipsService
  ]
})
export class CoreModule { }

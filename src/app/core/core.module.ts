import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsService } from './services/ships.service';
import { ShipsResolver } from './resolvers/ships-resolver.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ShipsService,
    ShipsResolver
  ]
})
export class CoreModule { }

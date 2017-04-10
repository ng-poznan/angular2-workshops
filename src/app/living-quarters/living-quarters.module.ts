import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivingQuartersRoutingModule } from './living-quarters-routing.module';
import { LivingQuartersComponent } from './living-quarters.component';

@NgModule({
  imports: [
    CommonModule,
    LivingQuartersRoutingModule
  ],
  declarations: [LivingQuartersComponent]
})
export class LivingQuartersModule { }

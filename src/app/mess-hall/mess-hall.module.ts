import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessHallRoutingModule } from './mess-hall-routing.module';
import { MessHallComponent } from './mess-hall.component';

@NgModule({
  imports: [
    CommonModule,
    MessHallRoutingModule
  ],
  declarations: [MessHallComponent]
})
export class MessHallModule { }

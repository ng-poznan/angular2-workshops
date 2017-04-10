import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TurboliftComponent } from './turbolift.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TurboliftComponent],
  exports: [TurboliftComponent]
})
export class TurboliftModule { }

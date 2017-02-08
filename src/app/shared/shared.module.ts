import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YodaComponent } from './yoda/yoda.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YodaComponent],
  exports: [YodaComponent]
})
export class SharedModule { }

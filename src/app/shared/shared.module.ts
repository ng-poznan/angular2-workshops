import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YodaComponent } from './yoda/yoda.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [YodaComponent],
  exports: [YodaComponent, CommonModule, FormsModule]
})
export class SharedModule { }

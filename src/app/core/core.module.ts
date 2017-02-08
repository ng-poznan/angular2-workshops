import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineService } from './engine/engine.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [EngineService]
})
export class CoreModule { }

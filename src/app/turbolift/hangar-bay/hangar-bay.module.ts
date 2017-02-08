import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HangarBayComponent } from './hangar-bay.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HangarBayComponent],
  exports: [HangarBayComponent]
})
export class HangarBayModule { }

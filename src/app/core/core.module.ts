import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineService } from './engine/engine.service';
import { MainComputerService } from './main-computer/main-computer.service';
import { SecurityService } from './security/security.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [EngineService, MainComputerService, SecurityService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

import { NgModule } from '@angular/core';
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
export class CoreModule { }

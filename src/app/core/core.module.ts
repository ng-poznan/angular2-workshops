import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsService } from './services/ships.service';
import { AuthorizationService } from './services/authorization.service';
import { CanActivateControlPanel } from './guards/control-panel-guard.service';
import { ShipsResolver } from './resolvers/ships-resolver.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ShipsService,
    AuthorizationService,
    CanActivateControlPanel,
    ShipsResolver
  ]
})
export class CoreModule { }

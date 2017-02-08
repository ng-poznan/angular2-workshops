// uncomment those lines to see how the guard for injecting the core module with lazy loading is working
// import { CoreModule } from './../../core/core.module';
import { CommandCenterRoutingModule } from './command-center-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommandCenterComponent } from './command-center.component';
import { YesNoPipe } from './yes-no/yes-no.pipe';

@NgModule({
  imports: [
    SharedModule,
    CommandCenterRoutingModule,
    // CoreModule
  ],
  declarations: [CommandCenterComponent, YesNoPipe],
  exports: [CommandCenterComponent]
})
export class CommandCenterModule { }

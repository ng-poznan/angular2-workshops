import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { TurboliftModule } from './turbolift/turbolift.module';
import { MessHallModule } from './mess-hall/mess-hall.module';
import { LivingQuartersModule } from './living-quarters/living-quarters.module';
import { HangarModule } from './hangar/hangar.module';
import { CommandCenterModule } from './command-center/command-center.module';

import { HangarComponent } from './hangar/hangar.component';
import { CommandCenterComponent } from './command-center/command-center.component';
import { LivingQuartersComponent } from './living-quarters/living-quarters.component';
import { MessHallComponent } from './mess-hall/mess-hall.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'hangar', component: HangarComponent },
  { path: 'command-center', component: CommandCenterComponent },
  { path: 'living-quarters', component: LivingQuartersComponent },
  { path: 'mess-hall', component: MessHallComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TurboliftModule,
    MessHallModule,
    LivingQuartersModule,
    HangarModule,
    CommandCenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
